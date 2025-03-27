<script setup lang="ts">
interface Props {
	type?: string;
	name: string;
	placeholder?: string;
	inputClass?: string;
	disabled?: boolean;
}

import { useField } from "vee-validate";
import { toRefs } from "vue";

const props = withDefaults(defineProps<Props>(), {
	disabled: false,
});

const { name, placeholder } = toRefs(props);

const {
	value: model,
	errorMessage,
	handleBlur,
} = useField(() => name.value, [], {
	validateOnValueUpdate: true,
});
</script>

<template>
	<div class="flex flex-col">
		<div class="flex items-center">
			<label class="custom-checkbox">
				<input
					type="checkbox"
					:disabled="disabled"
					v-bind="$attrs"
					v-model="model"
					@blur="handleBlur"
					:name="name"
					class="custom-checkbox__input"
				/>
				<span class="custom-checkbox__checkmark"></span>
			</label>
			<span class="ml-2" :class="{'opacity-40': disabled}">
        <slot name="label">
          {{ placeholder }}
        </slot>
      </span>
		</div>
		<div class="text-sm text-red-500 px-4" v-if="errorMessage">
			{{ errorMessage }}
		</div>
	</div>
</template>

<style scoped>
.custom-checkbox {
	display: inline-block;
	position: relative;
	cursor: pointer;
	width: 20px;
	height: 20px;
}

.custom-checkbox__input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.custom-checkbox__checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 20px;
	width: 20px;
	background-color: transparent;
	border: 2px solid black;
	transition: all 0.2s ease;
}

.custom-checkbox__input:checked + .custom-checkbox__checkmark {
	background-color: black;
	border-color: black;
}

.custom-checkbox__input:checked + .custom-checkbox__checkmark::after {
	content: "";
	position: absolute;
	display: block;
	left: 6px;
	top: 2px;
	width: 5px;
	height: 10px;
	border: solid yellow;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}
</style>