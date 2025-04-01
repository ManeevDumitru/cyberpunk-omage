<script setup lang="ts">
import * as yup from "yup";
import BaseTextField from "@/components/general/BaseTextField.vue";
import { ref } from "vue";
import BaseCheckbox from "@/components/general/BaseCheckbox.vue";
import { useForm } from "vee-validate";
import Alert from "@/components/general/Alert.vue";

const showAlert = ref(false);
const alertText = ref("Operation completed successfully!");

const formValid = ref(false);
const email = ref("");
const checked = ref(false);
const errors = ref({});

const schema = yup.object({
  email: yup.string().required().email(),
  check: yup.boolean().required('Required!').oneOf([true], 'Required!'),
});

const { validate, values, setErrors } = useForm({
  validationSchema: schema,
});

const validateForm = async () => {
  const form = await validate();
  formValid.value = form.valid;
}

const submit = async () => {
  try {
    alertText.value = "Operation completed successfully!";
    showAlert.value = true;
    
  } catch (e) {
    if (e && e.data?.errors) {
      setErrors(e.data.errors);
    }
  } finally {
    console.log(errors);
  }
};
</script>

<template>
  <section class="sectionSpamContainer my-8">
    <form @submit.prevent="submit" @input="validateForm()">
      <div class="sectionSpamBox">
        <div class="sectionSpam block lg:grid py-12 mx-4 lg:mx-auto">
          <div class="fieldLeft mt-4 lg:ml-2 mr-4">
            <div class="fieldLeftContainer">
              <h2 class="text-5xl leading-none mb-2">Be the first one!</h2>
              <p>Subscribe to get news about development of Cyberpunk 2077</p>
            </div>
          </div>
          <div class="fieldMiddle my-6">
            <div class="inputBox">
              <BaseTextField
                v-model="email"
                label="Introduce your e-mail"
                class="custom"
                name="email"
              />
            </div>
            <div class="checkboxBox">
              <base-checkbox v-model="checked" name="check" />
              <p class="">
                I want to get news, special offers and other information about CD PROJEKT and I
                confirm that I'm older than 16 years. <br />
                <br />
                <span>
                  CD PROJEKT is responsible for the safety of your data. To get aditional
                  information please read the
                  <a href="https://regulations.cdprojektred.com/en/privacy_policy">
                    Privacy policy CD PROJEKT</a
                  >
                </span>
              </p>
            </div>
          </div>
          <div class="fieldRight flex items-center justify-center lg:justify-end ml-2 mr-4">
            <button class="custom-button" type="submit" :disabled="!formValid">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </section>
  
  <Alert
    :show="showAlert"
    :text="alertText"
    @close="showAlert = false"
  />
</template>

<style scoped lang="scss">
:deep(.custom) {
  .text-field__label {
    font-family: "Odibee Sans", cursive;
    color: black;

    &:not(.text-field__label--active) {
      font-size: 32px;
    }
    &--active {
      font-size: 16px;
    }
  }
  input {
    font-family: "Odibee Sans", cursive;
    background: transparent;
    font-size: 32px;
  }
}

.custom-button {
  background: url(@/assets/img/utility/Outline2B.png);
  border: none;
  width: 250px;
  height: 75px;
  font-family: "Odibee Sans", sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;

  &:disabled {
    background: url(@/assets/img/utility/Outline2.png);
    color: #908c06;
    cursor: default;
  }
}

.checkboxBox {
  display: grid;
  grid-template-columns: 1fr 20fr;
}

.checkboxBox p {
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-size: 16px;
  letter-spacing: 0.1px;
  font-weight: 200;
  padding-right: 30px;
}

.checkboxBox a {
  text-decoration: underline;
}

input#checkbox {
  align-self: baseline;
  background: none;
  border: none;
}

.sectionSpamContainer {
  background: #000;
  position: relative;

  &::before {
    content: " ";
    background: url(@/assets/img/utility/bar6.png);
    width: 100%;
    height: 49px;
    position: absolute;
    top: -1px;
    left: 0;
  }

  &::after {
    content: " ";
    background: url(@/assets/img/utility/bar6inv.png);
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -2px;
    left: 0;
  }
}

.sectionSpamBox::before {
  content: " ";
  background: url(@/assets/img/utility/bar6.png);
  width: 100%;
  height: 49px;
  position: absolute;
  top: -1px;
  left: 0;
}

.sectionSpamBox {
  margin: auto;
  background: #efe600;
}

.sectionSpam {
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 3fr 1fr;
  max-width: 1400px;
}
</style>
