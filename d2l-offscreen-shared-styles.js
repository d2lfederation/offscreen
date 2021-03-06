import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-offscreen-shared-styles">
	<template>
		<style>
			:host {
				--d2l-offscreen: {
					position: absolute !important;
					overflow: hidden;
					width: 1px;
					height: 1px;
					white-space: nowrap;
					left: -10000px;
				};
				--d2l-offscreen-rtl: {
					left: 0;
					right: -10000px;
				};
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
