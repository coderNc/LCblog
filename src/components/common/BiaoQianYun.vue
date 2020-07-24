<template>
  <div>
    <svg :width="width" :height="height" @mousemove="listener($event)">
      <a :href="tag.href" v-for="(tag,index) in tags" :fill="colorList[index]" :key="index">
        <text
          :x="tag.x"
          :y="tag.y"
          :font-size="20 * (600/(600-tag.z))"
          :fill-opacity="((400+tag.z)/600)"
        >{{tag.text}}</text>
      </a>
    </svg>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      width: 350,
      height: 300,
      tagsNum: 20,
      RADIUS: 150,
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      tags: [],
      tagsR: [],
        colorList:['#409EFF','#67C23A','#E6A23C','#F56C6C','#FFFC40','#FF4040','#40FFAF','#40FFF2','#5040FF','#C640FF','#FC40FF']
    };
  },
  watch: {},
  computed: {
    CX() {
      return this.width / 2;
    },
    CY() {
      return this.height / 2;
    },
  },
  created() {
    this.axios.defaults.baseURL = "http://www.lcblog.xyz:81";
    this.axios({
      method: "get",
      url: "/category",
    }).then((res) => {
      //console.log(res);
      if (res.status == 200 && res.data.status == "success") {
        this.tagsR = res.data.data;
        let tags = [];
        res.data.data.forEach((value, index, arrar) => {
          //console.log(value);
          //console.log(index);
          //console.log(arrar.length);
          let tag = {};
          let k = -1 + (2 * (index + 1) - 1) / arrar.length;
          let a = Math.acos(k);
          let b = a * Math.sqrt(arrar.length * Math.PI);
          tag.text = value.categoryName;
          tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
          tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
          tag.z = this.RADIUS * Math.cos(a);
          tag.href = "#/category/" + value.id;

          tags.push(tag);
        });
        this.tags = tags;
      }
    });
  },
  mounted() {
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17);
  },
  methods: {
    rotateX(angleX) {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
        var z1 = tag.z * cos + (tag.y - this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) {
      //响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX =
        x * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY =
        y * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    },
  },
};
</script>

<style scoped>
svg {
  /* margin-right: 50px; */
  /* padding-right: 50px; */
}
svg a {
  color: #409eff;
}
</style>
