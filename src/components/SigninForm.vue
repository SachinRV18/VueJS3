<template>
  <div class="sign-in-container">
    <div class="sign-in-content">
      <!-- Sign-in Form -->
      <div class="form-container">
        <h3 class="form-heading">Sign In</h3>
        <form @submit.prevent="signIn">
          <!-- E-Mail or Phone Field -->
          <div class="form-group">
            <label for="username" class="label" :class="{ active: username || usernameFocused }">
              E-Mail or Phone
            </label>
            <InputText
              type="text"
              id="username"
              v-model="username"
              @focus="usernameFocused = true"
              @blur="usernameFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label for="password" class="label" :class="{ active: password || passwordFocused }">
              Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              @focus="passwordFocused = true"
              @blur="passwordFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Privacy Policy Checkbox -->
          <div class="form-group checkbox-group">
            <input
              type="checkbox"
              id="privacy-policy"
              v-model="acceptPrivacyPolicy"
              required
            />
            <label for="privacy-policy">
              I accept the <a href="#" target="_blank">Privacy Policy</a>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="form-group">
            <Button type="submit" label="Sign In" class="p-button-success button" />
          </div>
        </form>
      </div>

      <!-- Right Image -->
      <div class="image-container">
        <img src="/src/assets/image/sign-in-img.jpg" alt="Authentication" class="image" />
      </div>
    </div>
  </div>
</template>

<script>

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


export default {
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
      acceptPrivacyPolicy: false,
      usernameFocused: false,
      passwordFocused: false,
    };
  },
  methods: {
    signIn() {
      const credentials = {
        username: this.username,
        password: this.password,
        acceptPrivacyPolicy: this.acceptPrivacyPolicy,
      };
      this.$emit('sign-in', credentials);
      this.username = '';
      this.password = '';
      this.acceptPrivacyPolicy = false;
    },
  },
};
</script>

<style scoped>
/* General Layout */
.sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #fff;
}

.sign-in-content {
  display: flex;
  width: 100%;
  gap: 40px;
}

.form-container {
  flex: 1;
}

.form-heading {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

/* Input Fields */
.form-group {
  margin-bottom: 20px;
  position: relative;
}

.label {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 14px;
  color: #999;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  margin: 2px;
}

.label.active {
  top: -10px;
  font-size: 12px;
  color: #25a676;
}

.input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.2);
}

/* Checkbox */
.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  margin-right: 10px;
}

.checkbox-group label {
  font-size: 14px;
  color: #555;
}

.checkbox-group a {
  color: #25a676;
  text-decoration: none;
}

.checkbox-group a:hover {
  text-decoration: underline;
}

/* Button */
.button {
  width: 100%;
  padding: 12px;
  background-color: #25a676;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #16835b;
}

/* Image */
.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sign-in-content {
    flex-direction: column;
  }

  .image-container {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .form-heading {
    font-size: 24px;
  }

  .button {
    font-size: 14px;
  }

  .image-container {
    height: 200px;
  }
}
</style>
