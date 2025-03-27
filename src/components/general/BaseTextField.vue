<script setup lang="ts">
import { useField } from "vee-validate";
import { ref, toRefs, computed } from "vue";

interface Props {
	type?: string;
	name?: string;
	modelValue?: string | number;
	placeholder?: string;
	label?:string;
	inputClass?: string;
	errorMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
	type: "text",
});

const { name, placeholder, label, type, modelValue } = toRefs(props);

const isFocused = ref(false);

const {
	value: fieldValue,
	errorMessage,
	handleBlur,
} = props.name
	? useField(props.name, [], { validateOnValueUpdate: true })
	: {
		value: modelValue,
		errorMessage: ref(""),
		handleBlur: () => {},
	};

const isLabelActive = computed(() =>
	isFocused.value || (fieldValue.value && fieldValue.value.toString().length > 0)
);
</script>

<template>
	<div class="text-field">
		<label
			class="text-field__label"
			:class="{
        'text-field__label--active': isLabelActive,
        'text-field__label--error': errorMessage
      }"
		>
			{{ placeholder || label }}
		</label>
		<div
			class="text-field__wrapper"
			:class="{ 'text-field__wrapper--error': errorMessage }"
		>
			<input
				v-bind="$attrs"
				v-model="fieldValue"
				:autocomplete="name"
				:name="name"
				:type="type"
				:placeholder="!isFocused && !fieldValue ? placeholder : ''"
				@focus="isFocused = true"
				@blur="() => {
          isFocused = false;
          handleBlur();
        }"
				class="text-field__input"
			/>
		</div>
		<div
			v-if="errorMessage"
			class="text-field__error-messages"
		>
			{{ errorMessage }}
		</div>
	</div>
</template>

<style scoped>
.text-field {
	margin-bottom: 16px;
	position: relative;
}

.text-field__label {
	display: block;
	font-size: 14px;
	color: #6c757d;
	transition: all 0.3s ease;
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
}

.text-field__label--active {
	transform: translateY(-100%) scale(0.9);
	font-size: 12px;
}

.text-field__label--error {
	color: #dc3545;
}

.text-field__wrapper {
	position: relative;
	border-bottom: 1px solid #6c757d;
	transition: border-color 0.3s ease;
	padding-top: 8px;
}

.text-field__wrapper--error {
	border-color: #dc3545;
}

.text-field__input {
	width: 100%;
	border: none;
	outline: none;
	padding: 0;
	font-size: 16px;
	background: transparent;
}

.text-field__error-messages {
	color: #dc3545;
	font-size: 12px;
	margin-top: 4px;
}
</style>