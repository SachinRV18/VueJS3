<template>
  <template>Interactive Vue.js</template>
  <div>
    <h1>Interactive Vue.js Concepts</h1>
    <p>This is a text : {{ calculateBooksMessage() }}</p>

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <!-- Displaying dynamic greeting and time -->
    <div>
      <h2>{{ greet }} {{ name }}!</h2>
      <p>Current time: <span v-html="time"></span></p>
    </div>

    <!-- Dynamic HTML content injection -->
    <div v-html="hack"></div>
    <a v-bind:href="url"> This contains URL... </a>
    <hr />

    <a v-on:click="doSomething"> ... </a>

    <!-- shorthand -->
    <a @click="doSomething"> ... </a>

    <!-- shorthand -->
    <a :href="url"> ... </a>
    <h2 v-bind:id="heading">This is a Heading</h2>
    <button v-bind:disabled="isDisabled">Submit</button>

    <!--
      Note that there are some constraints to the argument expression,
      as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
      -->
    <!-- <a v-bind:[attributeName]="url"> ... </a> -->

    <!-- shorthand -->
    <!-- <a :[attributeName]="url"> ... </a> -->

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

    <hr />

    <div>
      <h2>Event Handling</h2>
      <h3>userName: {{ EventUserName }}</h3>
      <button v-on:click="EventUserName = 'Mario'">Change UserName</button>
    </div>

    <div>
      <h2>{{ counter }}</h2>
      <button @click="counter++">Increment</button>

      <!-- Button Event Handling -->
      <button @click="handleClick">Click Me</button>
      <p>{{ buttonClickMessage }}</p>

      <!-- Form Handling -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="Fullname">FullName:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="submitted">
        Form submitted with Name: {{ name }} and Email: {{ email }}
      </p>
    </div>

    <!-- Modifier Example: .stop and .once -->
    <div @click.stop="handleOuterClick" class="outer-div">
      <div @click.once="handleInnerClick" class="inner-div">
        Click here (Inner Div)
      </div>
    </div>
    <hr />
    <!-- Bonous Directive -->
    <!-- v-once -->
    <h2 v-once>{{DirectiveName}}</h2>
    <button @click="DirectiveName = 'Batman'">Change name</button>
    <hr>
    <!-- V-pre -->
    <h3 v-pre> {{ DirectiveName }}</h3>
    <hr>
    <!-- computed properties -->
    <h2>Full name - {{ firstName }} {{ lastName }}</h2>
    <h2>using computed properties - {{ computedFullname }} </h2>

    <hr>
    <h2>Computed property vs Data Property</h2>

    <h2>Total cost of the items</h2>
    <!-- <h2>Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}</h2> -->
     <button @click="items.push({id:4, title:'keyboard', price: 50})">Add items</button>

    <h2>computed total - {{ total }}</h2>

    <hr>
    <h2>Computed property vs Methods</h2>
    <h2>Method total - {{ getTotal() }}</h2>
    <input type="text" v-model="country">

    <hr>
    <h2>Computed Properties and v-for</h2>
    <h3>Items greater than 100 shown below</h3>
    <template v-for="item in items" :key=item.id>
      <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
    </template>

    <hr>
    <h3>using computed properties</h3>
      <h2 v-for="item in expensiveItems" :key=item.id>{{ item.title }}{{ item.price}}</h2>

    <hr>

    <!-- computed setter -->
     <button @click="changeFullName">Change full name</button>
     <h2>Full name - {{ firstName }} {{ lastName }}</h2>
    <h2>using computed properties - {{ computedFullname }} </h2>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Sachin",
      lastName: "RV",
      DirectiveName: "Mahesh",
      buttonClickMessage: "",
      Fullname: "",
      email: "",
      submitted: false,
      counter: 0,
      EventUserName: "Sachin",
      rawHtml: "<b>This is Bold tag</b>",
      greet: "Hello",
      name: "Sachin!",
      time: "<b>08:00 PM</b>",
      hack: `<a href="#" onclick="alert('you have been hacked!')"><u>Win a Prize</u></a>`,
      url: "https://www.google.com",
      doSomething: "doSomething",
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
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      items:[
        {
          id: 1,
          title: 'TV',
          price: 100
        },
        {
          id: 2,
          title: 'Phone',
          price: 200
        },
        {
          id: 3,
          title: 'Fridge',
          price: 300
        }
      ],
      country:''
    };
  },
  methods: {
    getTotal() {
      console.log('method starts')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0);
    },
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
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
    handleClick() {
      this.buttonClickMessage = "Button was clicked!";
    },
    handleSubmit() {
      // Show an alert with the form data
      alert(`Form submitted!\nName: ${this.name}\nEmail: ${this.email}`);

      // mark the form as submitted
      this.submitted = true;
    },

    handleOuterClick() {
      alert("Outer div clicked!");
    },
    handleInnerClick() {
      alert("Inner div clicked!");
    },
    changeFullName(){
      this.computedFullname = 'Demon slayer';
    }

  },
  computed: {
    // computedFullname() {
    //   // return this.firstName + " " + this.lastName; or
    //   return `${this.firstName} ${this.lastName}`;
    // },
    computedFullname:{
      get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const names = value.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  },
    total(){
      console.log('computed property starts')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0);
    },
    expensiveItems(){
      return this.items.filter(item => item.price > 100);
    }
  },
};
</script>

<style>

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

form {
  margin-top: 20px;
}
input {
  margin: 5px;
}
.outer-div {
  background-color: lightblue;
  padding: 20px;
}

.inner-div {
  background-color: lightgreen;
  padding: 20px;
  margin-top: 10px;
}
</style>
