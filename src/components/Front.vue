<template>
    <div>
        <video-background 
        :src="require(`@/assets/tv.mp4`)"
        style="height: 99vh;"
        poster = "require(`@/assets/tv.jpg`)"
        overlay="linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1))" 
        >
        <img src = "@/assets/excess_logo.png" id = "logo">
            <div class = "flex-container">
                <div class = "head-text">
                    <div class = "outline x">X</div><div class = "outline t">T</div><div class = "outline e">E</div>
                    <div class = "outline c">C</div><div class = "outline h">H</div> <div class = "outline s">S</div><div class = "outline t1">T</div>
                    <div class = "outline u" >U</div><div class = "outline d" >D</div><div class = "outline i" >I</div><div class = "outline o" >O</div>
                    &nbsp; <div class = "outline two" >2</div>.<div class = "outline zero" >0</div>

                    <div class="motto"> "Design change from home." </div>
                    <hr class = "line">

                    <div class = "events">
                        <div class = "event">
                        
                        </div>
                    </div>
                </div>
                
                             

            </div>
        </video-background>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$anime
        .timeline()
        .add({
            targets: ".head-text .x",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .t",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .e",
            rotateY: "360deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .c",
            rotateY: "360deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .h",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .s",
            rotateY: "360deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .t1",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .u",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .d",
            rotateY: "360deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .i",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .o",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .two",
            rotateY: "360deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: ".head-text .zero",
            rotateY: "180deg",
            duration: 200,
            easing: 'easeInOutQuad'
        })

        this.$anime({
            targets: ".line",
            scale: [0,2],
            duration: 5400,
        })
        
    }
}
</script>

<style scoped>

#logo{
    width: 150px;
    height: 150px;
}

.flex-container {
  display: flex;
  justify-content: center;
}

.head-text{
    font-family: 'Orbitron', sans-serif;
    color: white;
    font-size: 350%;
}

.outline{
    display: inline-block;
}

.motto{
    color: rgb(129, 252, 180);
    font-size: 50%;
    text-align: center;
font-family: 'Aldrich', sans-serif;
}

.line{
    width: 70%;
}

.events{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.event{
    background-image: url("~@/assets/main.png");
    height: 500px;
    width: 350px;
    border: solid black 2px;
    background-position: center;
    background-size: cover;
}


@media only screen and (max-width: 700px) {

    #logo{
        width: 100px;
        height: 100px;
    }

    .head-text{
    font-size: 200%;
    }

    .motto{
        font-size: 30%;
    }


    .line{
    width: 50%;
    }


    .event{
        width:325px ;
        height: 450px;
    }





}

</style>