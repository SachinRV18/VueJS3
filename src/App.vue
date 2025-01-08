<template>
  <div>
    <div>{{ greet }} {{ name }}!</div>
    <div v-text="time"></div>
    <!-- <div v-text="time">Hello {{ name }}</div> error -->
    <div v-html="hack"></div>
    <h2 v-bind:id="heading">This is a Heading</h2>
    <button v-bind:disabled="isDisabled">Submit</button>

    <!-- <h2 v-bind:class="underLineCSS">Working to find the underLine Text</h2> -->
    <h2 v-bind:class="underline">{{ underline }}</h2>
    <h2 v-bind:class="isPromoted && 'promoted'">{{ underline }}</h2>

    <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">SoldOut Movie??</h2>

    <h2 v-bind:class="['new', 'promoted']">
      Newly promoted movie check using Array!
    </h2>
    <h2
      v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']"
    >
      Array conditional movie check
    </h2>

    <h2
      v-bind:class="{
        promoted: isPromoted,
        new: !isSoldOut,
        'sold-out': isSoldOut,
      }"
    >
      Object conditional Movie
    </h2>

    <h2
      v-bind:style="{
        color: isColoured,
        fontSize: headerSize,
        padding: '15px',
      }"
    >
      Inline Style
    </h2>

    <h2
      v-bind:style="{
        color: isColoured,
        'font-size': headerSize2 + 'px',
      }"
    >
      Inline Style with concatination
    </h2>

    <div v-bind:style="styleObjectApproach">This is a div</div>
    <!-- <div v-bind:style="(styleObjectApproach, successStyle)">This is a div</div> -->
    <div v-bind:style="[styleObjectApproach, successStyle]">This is a div</div>
    <div v-bind:style="[styleObjectApproach, dangerStyle]">This is a div</div>

    <div :style="successStyle">
      This Div created using ShortHand V - bing directive
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      greet: "Hello",
      name: "Sachin!",
      time: "<b>08:00 PM</b>",
      hack: `<a href="#" onclick="alert('you have been hacked!')"><u>Win a Prize</u></a>`,
      heading: "heading",
      isDisabled: true,
      underline: "This is a underline text",
      isPromoted: true,
      isSoldOut: true,
      isColoured: "tomato",
      headerSize: "50px",
      headerSize2: "10",
      styleObjectApproach: {
        margin: "100px",
        padding: "100px",
        backgroundColor: "orange",
        border: "2px solid black",
        color: "white",
      },
      successStyle: {
        backgroundColor: "green",
        color: "white",
      },
      dangerStyle: {
        backgroundColor: "red",

        color: "white",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div .underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold-out {
  color: grey;
}

/* .underLineCSS {
  text-decoration: underline;
  color: aqua;
} */
</style>
