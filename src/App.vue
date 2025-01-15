<template>
  <div>
    <h1>Interactive Vue.js Concepts</h1>
    <!-- Displaying dynamic greeting and time -->
    <div>
      <h2>{{ greet }} {{ name }}!</h2>
      <p>Current time: <span v-html="time"></span></p>
    </div>

    <!-- Dynamic HTML content injection -->
    <div v-html="hack"></div>
    <h2 v-bind:id="heading">This is a Heading</h2>
    <button v-bind:disabled="isDisabled">Submit</button>

    <!-- Conditional class binding using v-bind:class -->
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

    <!-- Inline Style binding -->
    <h2
      v-bind:style="{
        color: isColoured,
        fontSize: headerSize,
        padding: '15px',
      }"
    >
      Inline Style
    </h2>
    <h2 v-bind:style="{ color: isColoured, 'font-size': headerSize2 + 'px' }">
      Inline Style with concatenation
    </h2>

    <!-- Multiple style binding -->
    <div v-bind:style="[styleObjectApproach, successStyle]">
      This is a div with multiple styles applied.
    </div>
    <div v-bind:style="[styleObjectApproach, dangerStyle]">
      This is a div with multiple styles applied.
    </div>

    <!-- Conditional Rendering with v-if and v-show -->
    <h2>Conditional Rendering Concepts</h2>
    <h3 v-if="num === 0">The number is zero</h3>
    <h3 v-else-if="num > 0">The number is positive</h3>
    <h3 v-else-if="num < 0">The number is negative</h3>
    <h3 v-else>Not a Number</h3>

    <template v-if="display">
      <h2>Hello</h2>
      <p>Conditional Rendering is working as expected.</p>
    </template>

    <h2 v-show="isShow">This text appears using v-show</h2>
    <h2 v-if="isShow">This text appears using v-if</h2>

    <!-- Looping with v-for to display lists -->
    <hr />
    <h2 v-for="(named, index) in names" :key="named">
      {{ index + 1 }}. {{ named }}
    </h2>

    <hr />
    <h2 v-for="name in fullName" :key="name.fullName">
      {{ name.firstName }} {{ name.lastName }}
    </h2>

    <hr />
    <div>
      <h3>List of Movies by Actor</h3>
      <div v-for="actor in actors" :key="actor.name">
        <h4>{{ actor.name }}</h4>
        <ul>
          <li v-for="movie in actor.movies" :key="movie">{{ movie }}</li>
        </ul>
      </div>
    </div>

    <hr />
    <h2 v-for="(key, value, index) in myInfo" :key="index">
      {{ index }}. {{ key }}: {{ value }}
    </h2>

    <hr />
    <h2>Template Rendering</h2>
    <template v-for="name in names" :key="name">
      <h2>
        {{ name }}
        <hr />
      </h2>
    </template>

    <hr />
    <h2>Conditional Rendering in Templates</h2>
    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Sachin'">{{ name }}</h2>
    </template>

    <hr />

    <!-- Methods and dynamic calculations -->
    <h2>Methods</h2>
    <h2>Addition Method - {{ add(1, 2, 7) }}</h2>
    <h2>Multiplication Method - {{ multiply(baseValue) }}</h2>

    <!-- Form handling -->
    <div>
      <h3>Form Example</h3>
      <input v-model="inputValue" placeholder="Type something..." />
      <p>You typed: {{ inputValue }}</p>
      <button @click="submitForm">Submit</button>
      <p>{{ formStatus }}</p>
    </div>

    <!-- Button to toggle boolean data -->
    <div>
      <h3>Toggle Show / Hide</h3>
      <button @click="toggleDisplay">Toggle Text Display</button>
      <p v-if="isTextVisible">This is a toggleable text!</p>
    </div>

    <!-- Two-way binding with v-model -->
    <div>
      <h3>Two-way Binding Example</h3>
      <input v-model="userMessage" placeholder="Type your message" />
      <p>Your message: {{ userMessage }}</p>
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
      num: 50,
      display: true,
      isShow: false,
      names: ["Sachin", "Arjun", "Ganesh"],
      fullName: [
        { firstName: "Sachin", lastName: "RV" },
        { firstName: "Ganesh", lastName: "Raikar" },
        { firstName: "Arjun", lastName: "Vasu" },
      ],
      actors: [
        { name: "Super Hero Movie", movies: ["Batman", "Iron man"] },
        { name: "Angry Movies", movies: ["Jack1", "jack2"] },
        { name: "Silent Movies", movies: ["Movie1", "Movie2"] },
      ],
      myInfo: { name: "sachin", age: 25, Course: "Vue3" },
      baseValue: 2,
      baseMultiplier: 5,
      inputValue: "",
      formStatus: "",
      isTextVisible: false,
      userMessage: "",
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
    submitForm() {
      this.formStatus = "Form submitted!";
    },
    toggleDisplay() {
      this.isTextVisible = !this.isTextVisible;
    },
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
</style>
