<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';

    export default {
        scrollY:{
            type:Boolean,
            default:true,
        },
        props:{
            probeType:{
                type:Number,
                default:1
            },
            click:{
                type:Boolean,
                default:true,
            },
            listenScroll:{
                type:Boolean,
                default:false,
            },
            data:{
                type:Array,
                default:null
            },
            pullup:{
                type:Boolan,
                default:false,
            },
            beforeScroll:{
                type:Boolean,
                default:false,
            },
            refreshDelay:{
                type:Number,
                default:20
            }
        },
        mounted(){
            setTimeout(()=>{
                this._initScroll();
            },20)
        },
        methods:{
            _initScroll(){
                if(!this.$refs.wrapper) return;
                this.scroll = new BScroll( this.$refs.wrapper ,{
                    probeType:this.probeType,
                    click:this.click,
                })

                if(this.listenScroll){
                    let m = this;
                    this.scroll.on('scroll',(pos)=>{
                        m.$emit('scroll',pos);
                    })
                }

                if(this.pullup){
                    this.scroll.on('scrollEnd',()=>{
                        if(this.scroll.y <= ( this.scroll.MaxScrollY + 50)){
                            this.$emit('scrollToEnd');
                        }
                    })
                }

                if(this.beforeScroll){
                    this.scroll.on('beforeScrollStart',()=>{
                        this.$emit('beforeSroll')
                    })
                }
            },

            disable(){
                this.scroll && this.scroll.disable();
            },

            enable(){
                this.scroll && this.scroll.enable();
            },

            scrollTo(){
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
            },

            scrollToElement(){
                this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments);
            }
        },

        watch:{
            data(){
                setTimeout(()=>{
                    this.refresh();
                },this.refreshDelay)
            }
        }
    }
</script>