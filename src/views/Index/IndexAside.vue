<template>
    <div class="aside-wrapper">
      <div class="aside">
          <div class="zzsc-container">
            <div class="bqy"><h3><i class="el-icon-collection-tag"></i>标签云</h3></div>
            <biao-qian-yun/>
          </div>
        </div>
    </div>
</template>

<script>
import BiaoQianYun from '@/components/common/BiaoQianYun'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      BiaoQianYun
    },
    data () {
        return {

        }
    },
    watch: {

    },
    computed: {

    },
    created () {

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style scoped>

.aside-wrapper {
  width: 400px;
  
  position: absolute;
  top: 0;
  right: 0;
}
.aside{
/*   position: absolute;
  
  right: 0;
  top: 40px; */
  
  width: 400px;
}
.zzsc-container {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  
  height: 322px;
  opacity: 0.8;
}
.zzsc-container .bqy {
  border-bottom: 1px solid rgba(88, 88, 84, 0.411);
}
.zzsc-container h3 {
  padding: 10px 0;
  text-align: center;
  margin:  0;
}
.zzsc-container h3 i {
  color: #409eff;
  font-size: 18px;
  margin-right: 10px;
}
</style>
