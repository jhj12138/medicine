<template>
    <div id="comrel">
        <div class="comrel_top">
            <div class="comrel_return" @click="goReturn">
                <img src="../../assets/image/mine_return.png" alt=""/>
            </div>
            <div class="comrel_middle">商品发布</div>
        </div>
        <div class="comrel_con">
            <div class="comrel_con_inp">
                <input type="text" placeholder="请输入商品名称" v-model="names"/>
            </div>
            <div class="comrel_con_inp">
                <input type="text" placeholder="请输入商品价格" v-model="price"/>
            </div>
            <div class="comrel_con_inp1">
                <van-field
                        readonly
                        clickable
                        :value="value"
                        placeholder="是否推荐"
                        @click="showPicker = true"
                />
                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="columns"
                            @cancel="showPicker = false"
                            @confirm="onConfirm"
                    />
                </van-popup>
                <div class="comrel_up">
                    <img src="../../assets/image/up_picker.png" alt=""/>
                </div>
            </div>
            <div class="comrel_con_inp1">
                <van-field
                        readonly
                        clickable
                        :value="value2"
                        placeholder="商品状态"
                        @click="showPicker2 = true"
                />
                <van-popup v-model="showPicker2" round position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="columns2"
                            @cancel="showPicker2 = false"
                            @confirm="onConfirm2"
                    />
                </van-popup>
                <div class="comrel_up">
                    <img src="../../assets/image/up_picker.png" alt=""/>
                </div>
            </div>
        </div>
        <div class="comrel_update">
            <div class="comrel_updates">
                <div class="comrel_update_top">请上传商品图片</div>
                <div class="comrel_update_main">
                    <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
                </div>
            </div>
        </div>
        <div class="stand_textarea">
            <div class="stand_textarea_left">
                <img src="../../assets/image/stand_img.png" alt=""/>
            </div>
            <div class="stand_textarea_right">
                <textarea placeholder="请填写商品介绍" v-model="textareas"></textarea>
            </div>
        </div>
        <div class="stand_bottom" @click="submits">确定</div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import {
    AddgoodsContent,
    Obtaincommodity,
    exhibitionAddGoods,
    Editcommodity,
    uploadimgs
} from '../../api/home'

export default {
    data () {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            value: '',
            columns: ['是', '否'],
            showPicker: false,
            value2: '',
            columns2: ['已发布', '未发布'],
            showPicker2: false,
            value3: '',
            showPicker3: false,
            fileList: [
                {url:""}
                ],
            names: '',
            price: '',
            textareas: '',
            sum: '',
            sum1: '',
            list: '',
            imgurl: '',
            goods: '',
            isrecommend: '',
            isrelease: '',
            url: ''
        }
    },
    mounted () {
        this.Obtaincommodity()
    },
    methods: {
        Obtaincommodity () {
            this.cid = JSON.parse(sessionStorage.cidInfo)
            var sum = this.$route.query.sum
            var data = {
                cid: this.cid.cid
            }
            Obtaincommodity(data).then((res) => {
                if (res.Success) {
                    this.list = res.Data.Data[sum]
                    this.names = this.list.name
                    this.price = this.list.Price
                    if (this.list.isrecommend == 1) {
                        this.value = '是'
                    } else {
                        this.value = '否'
                    }
                    if (this.list.isrelease == 1) {
                        this.value2 = '已发布'
                    } else {
                        this.value2 = '未发布'
                    }
                    this.fileList = []
                    this.list.ImgList.split(',').map(item => {
                        this.fileList.push({
                            url: 'https://www.zjylz.com' + item.split('&&')[0]
                        })
                    })
                    this.textareas = this.list.Summary
                } else {
                    Toast(res.Msg)
                }
            })
        },
        onConfirm (value, index) {
            this.value = value
            this.showPicker = false
        },
        onConfirm2 (value, index) {
            this.value2 = value
            this.showPicker2 = false
        },
        onConfirm3 (value, index) {
            this.value3 = value
            this.showPicker3 = false
        },
        goReturn () {
            this.$router.push('/commodity')
        },
        afterRead (file) {
            const fd = new FormData()
            fd.append('File', file.file)
            fd.append('FileType', 'image')
            uploadimgs(fd).then(res => {
                this.fileList[0].url = 'https://www.zjylz.com/' + res.Data
                this.url =  res.Data
            })
            this.imgurl = file.file.name
        },
        submits () {
            if (this.value = '是') {
                this.isrecommend = 1
            } else {
                this.isrecommend = 0
            }
            if (this.value2 = '已发布') {
                this.isrelease = 1
            } else {
                this.isrelease = 0
            }
            const str = []
            this.fileList.map(item => {
                str.push(item.url + '&&' + item.name)
            })
            if (this.$route.query.Id) {
                var data = {
                    Pid: this.list.Pid,
                    name: this.names,
                    imgurl: '',
                    classid: this.list.classid,
                    Summary: this.textareas,
                    Price: this.price,
                    isrecommend: this.isrecommend,
                    isrelease: this.isrelease,
                    content: this.textareas,
                    topclassid: this.list.topclassid,
                    ImgList: str.join(',')
                }
                Editcommodity(data).then((res) => {
                    if (res.Success) {
                        Toast(res.Msg)
                        this.$router.push('/commodity')
                    } else {
                        Toast(res.Msg)
                    }
                })
            } else {
                if (!this.names) {
                    Toast('请输入商品名称')
                    return
                }
                if (!this.price) {
                    Toast('请输入商品价格')
                    return
                }
                if (!this.value) {
                    Toast('请输入是否推荐')
                    return
                }
                if (!this.value2) {
                    Toast('请输入商品状态')
                    return
                }
                if (this.fileList.length == 0) {
                    Toast('请上传商品图片')
                    return
                }
                if (!this.textareas) {
                    Toast('请填写商品介绍')
                    return
                }
                if (this.value == '是') {
                    this.sum = 1
                } else {
                    this.sum = 0
                }
                if (this.value2 = '已发布') {
                    this.sum1 = 1
                } else {
                    this.sum1 = 0
                }
                var goodsid = JSON.parse(sessionStorage.cidInfo).cid
                let data = {
                    name: '11',
                    Pid: '',
                    cid: JSON.parse(sessionStorage.cidInfo).cid,
                    imgurl: '',
                    ImgList: this.url,
                    topclassid: '12',
                    classid: '183',
                    Summary: this.textareas,
                    Price: this.price,
                    isrecommend: this.sum,
                    isrelease: this.sum1,
                    Status: '',
                    advice: '',
                    status: '',
                    content: this.textareas
                }
                exhibitionAddGoods(data).then((res) => {
                    if (res.Success) {
                        Toast(res.Msg)
                        this.$router.push('/commodity')
                    } else {
                        Toast(res.Msg)
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
@function px($px) {
    $rem: 75;
    @return ($px/ $rem) + rem;
}

#comrel {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: fixed;
    background-color: #f5f7fa;

    input::-webkit-input-placeholder {
        color: #888888;
    }

    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #888888;
    }

    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #888888;
    }

    input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #888888;
    }

    .comrel_top {
        height: px(100);
        display: flex;
        align-items: center;
        padding: 0 px(20);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;

        .comrel_return {
            width: px(21);

            img {
                width: 100%;
            }
        }

        .comrel_middle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
        }

        comrel_middle1 {
            margin-right: px(20);
        }
    }

    .comrel_con {
        margin-top: px(100);

        .comrel_con_inp {
            height: px(89);
            padding: 0 px(32);
            background: #ffffff;
            border-bottom: 1px solid rgba(38, 104, 192, 0.1);
            // margin-bottom: px(30);
            input {
                width: 100%;
                height: 100%;
                border: none;
                font-size: 14px;
            }
        }

        .comrel_con_inp1 {
            height: px(89);
            padding: 0 px(32);
            background: #ffffff;
            border-bottom: 1px solid rgba(38, 104, 192, 0.1);
            position: relative;

            .van-cell {
                padding: 0;
                height: 100%;

                .van-field__body {
                    height: 100%;
                }
            }

            .comrel_up {
                position: absolute;
                width: px(16);
                right: px(32);
                z-index: 9;
                top: 50%;
                transform: translateY(-50%);

                img {
                    width: 100%;
                }
            }
        }
    }

    .comrel_update {
        background: #fff;
        padding: px(40) px(32) 0;
        margin-top: px(32);

        .comrel_updates {
            padding-bottom: px(40);

            .comrel_update_top {
                color: rgba(136, 136, 136, 1);
            }

            .comrel_update_main {
                margin-top: px(30);

                .van-uploader {
                    // width: px(244);
                    // height: px(156);
                    .van-uploader__wrapper {
                        height: 100%;
                        // width: 100%;
                        display: flex;
                        // flex-wrap: nowrap;
                        .van-uploader__upload {
                            width: px(244);
                            height: px(156);
                            margin: 0;
                            background-color: #e9f0f9;
                        }

                        .van-uploader__preview {
                            width: px(244);
                            height: px(156);
                            // margin:0;
                            .van-uploader__preview-image {
                                width: 100%;
                                height: 100%;

                                img {
                                    object-fit: fill !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .stand_textarea {
        display: flex;
        width: 100%;
        height: px(274);
        padding: px(42) px(32);
        background-color: #fff;
        margin: px(30) 0 px(205);

        .stand_textarea_left {
            width: px(28);

            img {
                width: 100%;
            }
        }

        .stand_textarea_right {
            flex: 1;
            margin-left: px(23);

            > textarea {
                width: 100%;
                height: 100%;
                resize: none;
                border: none;
            }
        }
    }

    .stand_bottom {
        width: px(710);
        height: px(87);
        position: fixed;
        bottom: px(12);
        left: 50%;
        transform: translateX(-50%);
        background: #2668c0;
        border-radius: px(6);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 16px;
    }
}
</style>
