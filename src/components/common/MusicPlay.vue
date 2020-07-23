<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix header">
        <span><i class="el-icon-headset"></i> 音乐播放器</span>
        <el-button style="float: right; padding: 3px " type="text" @click="playDM">冬眠</el-button>
        <el-button style="float: right; padding: 3px " type="text" @click="playCTX">春庭雪</el-button>
        <el-button style="float: right; padding: 3px " type="text" @click="playSXQN">霜雪千年</el-button>
      </div>
      <div class="text item">
        <div class="btns-bg">
          <div class="PlayEy"></div>
          <div class="Btn"></div>
          <div class="Play" @click="playBtn" ref="aPlay">
            <audio id="audios" :src="musicUrl"></audio>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
//http://music.163.com/song/media/outer/url?id=504924216.mp3
export default {
  name: "",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      musicUrl:'static/music/sxqn.mp3'
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    playBtn(){
      var i = 0;
      var oPlayEy = document.getElementsByClassName("PlayEy")[0];
      var oPlay = document.getElementsByClassName("Play")[0];
      var audios = document.getElementById('audios');
      var seii = setInterval(function() {
        (i == 360) ? i = 0 : i++;
        oPlayEy.style.transform = "rotate(" + i + "deg)";
        if(audios.paused) {
          clearInterval(seii)
        }
      }, 30);
      if(audios.paused) {
        audios.play();
        //oPlay.style.backgroundImage = "url('../../assets/img/play.png')";
        this.$refs.aPlay.backgroundImage = "url('../../assets/img/play.png')"
        oPlay.style.width = 32 + "px";
        oPlay.style.height = 32 + "px";
      } else {
        audios.pause();
        //oPlay.style.backgroundImage = "url('../../assets/img/pause.png')";
        this.$refs.aPlay.backgroundImage = "url('../../assets/img/pause.png')"
        oPlay.style.width = 29 + "px";
        oPlay.style.height = 36 + "px";
      }
    },
    playDM(){
      this.musicUrl = 'static/music/dm .mp3'
    },
    playCTX(){
      this.musicUrl = 'static/music/ctx.mp3'
    },
    playSXQN(){
      this.musicUrl = 'static/music/sxqn.mp3'
    }

  },
};
</script>

<style scoped>
.PlayEy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 360px;
    background: url('../../assets/img/bg_circle.png'),url('../../assets/img/bg_center.png') no-repeat center;
    background-size: 100%
}

.Btn {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 95px;
	height: 95px;
	background-color: yellow;
	background: url('../../assets/img/btn-bg.png') no-repeat;
	animation: Btn-bg 3s linear infinite;
}

.Play {
	position: absolute;
	width: 29px;
	height: 36px;
	background: red;
	background: url('../../assets/img/pause.png') no-repeat;
	transition: .5s;
}

.btns-bg {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto;
	width: 360px;
	height: 360px;
}

@keyframes Btn-bg {
	from {}
	to {
		transform: rotate(360deg);
	}
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
  }
    .header span{
    font-size: 18px;
    color: #303133;
  }
  .header i{
    color: #409eff;
  }
</style>
