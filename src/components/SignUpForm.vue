<template>
  <div class="sign-up-container">
    <div class="sign-up-content">
      <!-- Form Section (Left Side) -->
      <div class="form-container">
        <h3 class="form-heading">Employer Sign Up</h3>
        <form @submit.prevent="handleSignUp">
          <!-- Company Name -->
          <div class="form-group">
            <label for="companyName" class="label" :class="{ active: companyName || companyNameFocused }">
              Company Name
            </label>
            <InputText
              id="companyName"
              v-model="companyName"
              @focus="companyNameFocused = true"
              @blur="companyNameFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- PAN Number -->
          <div class="form-group">
            <label for="panNumber" class="label" :class="{ active: panNumber || panNumberFocused }">
              PAN Number
            </label>
            <InputText
              id="panNumber"
              v-model="panNumber"
              @focus="panNumberFocused = true"
              @blur="panNumberFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- TAN Number -->
          <div class="form-group">
            <label for="tanNumber" class="label" :class="{ active: tanNumber || tanNumberFocused }">
              TAN Number
            </label>
            <InputText
              id="tanNumber"
              v-model="tanNumber"
              @focus="tanNumberFocused = true"
              @blur="tanNumberFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Business Type -->
          <div class="form-group">
            <label for="businessType" class="label" :class="{ active: businessType || businessTypeFocused }">
              Business Type
            </label>
            <InputText
              id="businessType"
              v-model="businessType"
              @focus="businessTypeFocused = true"
              @blur="businessTypeFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email" class="label" :class="{ active: email || emailFocused }">
              Email
            </label>
            <InputText
              type="email"
              id="email"
              v-model="email"
              @focus="emailFocused = true"
              @blur="emailFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Phone Number -->
          <div class="form-group">
            <label for="phoneNumber" class="label" :class="{ active: phoneNumber || phoneNumberFocused }">
              Phone Number
            </label>
            <InputText
              type="tel"
              id="phoneNumber"
              v-model="phoneNumber"
              @focus="phoneNumberFocused = true"
              @blur="phoneNumberFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- GST Number -->
          <div class="form-group">
            <label for="gstNumber" class="label" :class="{ active: gstNumber || gstNumberFocused }">
              GST Number
            </label>
            <InputText
              id="gstNumber"
              v-model="gstNumber"
              @focus="gstNumberFocused = true"
              @blur="gstNumberFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Company Address -->
          <div class="form-group">
            <label for="companyAddress" class="label" :class="{ active: companyAddress || companyAddressFocused }">
              Company Address
            </label>
            <InputText
              id="companyAddress"
              v-model="companyAddress"
              @focus="companyAddressFocused = true"
              @blur="companyAddressFocused = false"
              class="input"
              placeholder=" "
              required
            />
          </div>

          <!-- Privacy Policy Checkbox -->
          <div class="form-group checkbox-group">
            <input
              type="checkbox"
              id="privacyPolicy"
              v-model="acceptPrivacyPolicy"
              required
            />
            <label for="privacyPolicy">
              I accept the <a href="#" target="_blank">Privacy Policy</a>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="form-group">
            <Button type="submit" label="Sign Up" class="p-button-success button" />
          </div>
        </form>
      </div>

      <!-- Right Image Section -->
      <div class="image-container">
        <img src="/src/assets/image/sign-up-img.png" alt="Sign Up" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  name: "CompanyOnboarding",
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      companyName: "",
      panNumber: "",
      tanNumber: "",
      businessType: "",
      email: "",
      phoneNumber: "",
      gstNumber: "",
      companyAddress: "",
      documentsUpload: null,  // Store the file reference
      acceptPrivacyPolicy: false,
      companyNameFocused: false,
      panNumberFocused: false,
      tanNumberFocused: false,
      businessTypeFocused: false,
      emailFocused: false,
      phoneNumberFocused: false,
      gstNumberFocused: false,
      companyAddressFocused: false,
    };
  },
  methods: {
    handleSignUp() {
      if (!this.acceptPrivacyPolicy) {
        alert("Please accept the Privacy Policy.");
        return;
      }

      // Submit the form data
      alert("Company Onboarded Successfully!");
      console.log({
        companyName: this.companyName,
        panNumber: this.panNumber,
        tanNumber: this.tanNumber,
        businessType: this.businessType,
        email: this.email,
        phoneNumber: this.phoneNumber,
        gstNumber: this.gstNumber,
        companyAddress: this.companyAddress,
      });
    },
  },
};
</script>

<style scoped>
/* General Layout */
.sign-up-container {
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

.sign-up-content {
  display: flex;
  width: 100%;
  gap: 40px;
  align-items: flex-start;
}

.form-container {
  flex: 1;
  padding-right: 20px; /* Ensure the form has some spacing */
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 530px; /* Adjust image size */
  height: auto;
  margin-top: 100px;
}

/* Heading */
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

/* Responsive Design */
@media (max-width: 768px) {
  .sign-up-content {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .form-heading {
    font-size: 24px;
  }

  .image-container {
    height: 200px;
  }
}
</style>
