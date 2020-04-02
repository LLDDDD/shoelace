/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ShAlert {
        /**
          * Set to true to make the alert closable.
         */
        "closable": boolean;
        /**
          * Set to true to close the alert.
         */
        "closed": boolean;
        /**
          * The type of alert to draw.
         */
        "type": string;
    }
    interface ShButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret": boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle": boolean;
        /**
          * Set to true to disable the button.
         */
        "disabled": boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading": boolean;
        /**
          * The button's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * Removes focus from the button.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Set to true to draw a rounded button.
         */
        "round": boolean;
        /**
          * Sets focus on the button.
         */
        "setFocus": () => Promise<void>;
        /**
          * The button's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type": "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
    interface ShCheckbox {
        /**
          * Set to true to draw the checkbox in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the checkbox.
         */
        "disabled": boolean;
        /**
          * Set to true to draw the checkbox in an indeterminate state.
         */
        "indeterminate": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * The checkbox's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * Removes focus from the checkbox.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the checkbox.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface ShDropdown {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        /**
          * The preferred placement of the dropdown menu. Note that the actual placement may vary as needed to keep the menu inside of the viewport.
         */
        "placement": "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
          * The positioning strategy used for displaying the menu. If the menu is clipped by a containing element's overflow, setting this to `fixed` usually resolves it. Note that `fixed`` is less performant than `absolute`, so avoid using it when possible.
         */
        "strategy": "fixed" | "absolute";
    }
    interface ShDropdownDivider {
    }
    interface ShDropdownItem {
        /**
          * Set to true to draw the dropdown item in an active state.
         */
        "active": boolean;
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to draw the dropdown item in a disabled state.
         */
        "disabled": boolean;
    }
    interface ShInput {
        /**
          * The input's autocaptialize attribute.
         */
        "autocapitalize": string;
        /**
          * The input's autocomplete attribute.
         */
        "autocomplete": string;
        /**
          * The input's autocorrect attribute.
         */
        "autocorrect": string;
        /**
          * The input's autofocus attribute.
         */
        "autofocus": boolean;
        /**
          * Set to true to add a clear button when the input is populated.
         */
        "clearable": boolean;
        /**
          * Set to true to disable the input.
         */
        "disabled": boolean;
        /**
          * The input's inputmode attribute.
         */
        "inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The input's max attribute.
         */
        "max": number;
        /**
          * The input's maxlength attribute.
         */
        "maxlength": number;
        /**
          * The input's min attribute.
         */
        "min": number;
        /**
          * The input's minlength attribute.
         */
        "minlength": number;
        /**
          * The input's name attribute.
         */
        "name": string;
        /**
          * The input's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * The input's pattern attribute.
         */
        "pattern": string;
        /**
          * The input's placeholder text.
         */
        "placeholder": string;
        /**
          * Set to true for a readonly input.
         */
        "readonly": boolean;
        /**
          * Removes focus from the input.
         */
        "removeFocus": () => Promise<void>;
        /**
          * The input's required attribute.
         */
        "required": boolean;
        /**
          * Sets focus on the input.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input's size, one of `small`, `medium`, or `large`.
         */
        "size": string;
        /**
          * The input's step attribute.
         */
        "step": number;
        /**
          * Set to true to add a password toggle button for password inputs.
         */
        "togglePassword": boolean;
        /**
          * The input's type, one of `text`, `number`, `email`, etc.
         */
        "type": "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * The input's value attribute.
         */
        "value": string;
    }
    interface ShProgressBar {
        /**
          * The height of the progress bar in pixels.
         */
        "height": number;
        /**
          * The progress bar's percentage, 0 to 100.
         */
        "percentage": number;
    }
    interface ShProgressRing {
        /**
          * The diameter of the progress ring in pixels.
         */
        "diameter": number;
        /**
          * The current progress percentage, 0 - 100.
         */
        "percentage": number;
        /**
          * The stroke width of the progress ring in pixels.
         */
        "stroke": number;
    }
    interface ShRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * The radio's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * Removes focus from the radio.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the radio.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface ShRange {
        /**
          * Set to true to disable the input.
         */
        "disabled": boolean;
        /**
          * The input's max attribute.
         */
        "max": number;
        /**
          * The input's min attribute.
         */
        "min": number;
        /**
          * The input's name attribute.
         */
        "name": string;
        /**
          * The range's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * Removes focus from the input.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the input.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input's step attribute.
         */
        "step": number;
        /**
          * The tooltip's position.
         */
        "tooltip": "top" | "bottom" | "off";
        /**
          * A function used to format the tooltip's value.
         */
        "tooltipFormatter": (value: number) => string;
        /**
          * The input's value attribute.
         */
        "value": number;
    }
    interface ShSpinner {
        /**
          * The spinner's size.
         */
        "diameter": number;
        "stroke": number;
    }
    interface ShSwitch {
        /**
          * Set to true to draw the switch in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the switch.
         */
        "disabled": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * The switch's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * Removes focus from the switch.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the switch.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface ShTab {
        /**
          * Set to true to draw the tab in an active state.
         */
        "active": boolean;
        /**
          * Set to true to draw the tab in a disabled state.
         */
        "disabled": boolean;
        /**
          * The name of the tab panel the tab will be synced to. The panel must exist in the same `<sh-tabs>` element.
         */
        "panel": string;
        /**
          * Removes focus from the tab.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus to the tab.
         */
        "setFocus": () => Promise<void>;
    }
    interface ShTabPanel {
        /**
          * When true, the tab panel will be shown.
         */
        "active": boolean;
        /**
          * The tab panel's name.
         */
        "name": string;
    }
    interface ShTabs {
        /**
          * The position of the tabs.
         */
        "position": "top" | "bottom" | "left" | "right";
        /**
          * Shows the specified tab panel.
         */
        "show": (panel: string) => Promise<void>;
    }
    interface ShTextarea {
        /**
          * The textarea's autocaptialize attribute.
         */
        "autocapitalize": string;
        /**
          * The textarea's autocomplete attribute.
         */
        "autocomplete": string;
        /**
          * The textarea's autocorrect attribute.
         */
        "autocorrect": string;
        /**
          * The textarea's autofocus attribute.
         */
        "autofocus": boolean;
        /**
          * Set to true to disable the textarea.
         */
        "disabled": boolean;
        /**
          * The textarea's inputmode attribute.
         */
        "inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The textarea's maxlength attribute.
         */
        "maxlength": number;
        /**
          * The textarea's name attribute.
         */
        "name": string;
        /**
          * The textarea's tabindex attribute.
         */
        "nativeTabindex": number;
        /**
          * The textarea's placeholder text.
         */
        "placeholder": string;
        /**
          * Set to true for a readonly textarea.
         */
        "readonly": boolean;
        /**
          * Removes focus fromt the textarea.
         */
        "removeFocus": () => Promise<void>;
        /**
          * The textarea's required attribute.
         */
        "required": boolean;
        /**
          * Controls how the textarea can be resized.
         */
        "resize": "none" | "vertical" | "auto";
        /**
          * The number of rows to display by default.
         */
        "rows": number;
        /**
          * Sets focus on the textarea.
         */
        "setFocus": () => Promise<void>;
        /**
          * The textarea's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The textarea's value attribute.
         */
        "value": string;
    }
    interface ShTooltip {
        /**
          * Set to true to draw the the tooltip with an arrow.
         */
        "arrow": boolean;
        /**
          * Set to true to disable the tooltip so it won't show when triggered.
         */
        "disabled": boolean;
        /**
          * The distance in pixels from which to draw the tooltip from its target element.
         */
        "distance": number;
        /**
          * Shows the tooltip.
         */
        "hide": () => Promise<void>;
        /**
          * The delay in ms before the tooltip hides.
         */
        "hideDelay": number;
        /**
          * The duration in ms of the tooltip's hide transition.
         */
        "hideDuration": number;
        /**
          * The maximum width in pixels the tooltip can be before its content wraps.
         */
        "maxWidth": number;
        /**
          * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.
         */
        "placement": "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
        /**
          * Shows the tooltip.
         */
        "show": () => Promise<void>;
        /**
          * The delay in ms before showing the tooltip.
         */
        "showDelay": number;
        /**
          * The duration in ms of the tooltip's show transition.
         */
        "showDuration": number;
        /**
          * A selector or element to use as the tooltip's target. This is the element that will trigger the tooltip to show upon interaction. If no target is specified, the previous sibling element of the tooltip will be used. A common way to link a tooltip to a target is to give the target an `id` and pass `#id` to the `target` prop.
         */
        "target": string | HTMLElement;
        /**
          * The events that cause a tooltip to show, separated by a space. Possible values include any combination of `mouseenter`, `focus`, `click`, and `manual`. Use `manual` if you only want to show and hide the tooltip programmatically.
         */
        "trigger": string;
        /**
          * Sets the tooltip's z-index.
         */
        "zIndex": number;
    }
}
declare global {
    interface HTMLShAlertElement extends Components.ShAlert, HTMLStencilElement {
    }
    var HTMLShAlertElement: {
        prototype: HTMLShAlertElement;
        new (): HTMLShAlertElement;
    };
    interface HTMLShButtonElement extends Components.ShButton, HTMLStencilElement {
    }
    var HTMLShButtonElement: {
        prototype: HTMLShButtonElement;
        new (): HTMLShButtonElement;
    };
    interface HTMLShCheckboxElement extends Components.ShCheckbox, HTMLStencilElement {
    }
    var HTMLShCheckboxElement: {
        prototype: HTMLShCheckboxElement;
        new (): HTMLShCheckboxElement;
    };
    interface HTMLShDropdownElement extends Components.ShDropdown, HTMLStencilElement {
    }
    var HTMLShDropdownElement: {
        prototype: HTMLShDropdownElement;
        new (): HTMLShDropdownElement;
    };
    interface HTMLShDropdownDividerElement extends Components.ShDropdownDivider, HTMLStencilElement {
    }
    var HTMLShDropdownDividerElement: {
        prototype: HTMLShDropdownDividerElement;
        new (): HTMLShDropdownDividerElement;
    };
    interface HTMLShDropdownItemElement extends Components.ShDropdownItem, HTMLStencilElement {
    }
    var HTMLShDropdownItemElement: {
        prototype: HTMLShDropdownItemElement;
        new (): HTMLShDropdownItemElement;
    };
    interface HTMLShInputElement extends Components.ShInput, HTMLStencilElement {
    }
    var HTMLShInputElement: {
        prototype: HTMLShInputElement;
        new (): HTMLShInputElement;
    };
    interface HTMLShProgressBarElement extends Components.ShProgressBar, HTMLStencilElement {
    }
    var HTMLShProgressBarElement: {
        prototype: HTMLShProgressBarElement;
        new (): HTMLShProgressBarElement;
    };
    interface HTMLShProgressRingElement extends Components.ShProgressRing, HTMLStencilElement {
    }
    var HTMLShProgressRingElement: {
        prototype: HTMLShProgressRingElement;
        new (): HTMLShProgressRingElement;
    };
    interface HTMLShRadioElement extends Components.ShRadio, HTMLStencilElement {
    }
    var HTMLShRadioElement: {
        prototype: HTMLShRadioElement;
        new (): HTMLShRadioElement;
    };
    interface HTMLShRangeElement extends Components.ShRange, HTMLStencilElement {
    }
    var HTMLShRangeElement: {
        prototype: HTMLShRangeElement;
        new (): HTMLShRangeElement;
    };
    interface HTMLShSpinnerElement extends Components.ShSpinner, HTMLStencilElement {
    }
    var HTMLShSpinnerElement: {
        prototype: HTMLShSpinnerElement;
        new (): HTMLShSpinnerElement;
    };
    interface HTMLShSwitchElement extends Components.ShSwitch, HTMLStencilElement {
    }
    var HTMLShSwitchElement: {
        prototype: HTMLShSwitchElement;
        new (): HTMLShSwitchElement;
    };
    interface HTMLShTabElement extends Components.ShTab, HTMLStencilElement {
    }
    var HTMLShTabElement: {
        prototype: HTMLShTabElement;
        new (): HTMLShTabElement;
    };
    interface HTMLShTabPanelElement extends Components.ShTabPanel, HTMLStencilElement {
    }
    var HTMLShTabPanelElement: {
        prototype: HTMLShTabPanelElement;
        new (): HTMLShTabPanelElement;
    };
    interface HTMLShTabsElement extends Components.ShTabs, HTMLStencilElement {
    }
    var HTMLShTabsElement: {
        prototype: HTMLShTabsElement;
        new (): HTMLShTabsElement;
    };
    interface HTMLShTextareaElement extends Components.ShTextarea, HTMLStencilElement {
    }
    var HTMLShTextareaElement: {
        prototype: HTMLShTextareaElement;
        new (): HTMLShTextareaElement;
    };
    interface HTMLShTooltipElement extends Components.ShTooltip, HTMLStencilElement {
    }
    var HTMLShTooltipElement: {
        prototype: HTMLShTooltipElement;
        new (): HTMLShTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "sh-alert": HTMLShAlertElement;
        "sh-button": HTMLShButtonElement;
        "sh-checkbox": HTMLShCheckboxElement;
        "sh-dropdown": HTMLShDropdownElement;
        "sh-dropdown-divider": HTMLShDropdownDividerElement;
        "sh-dropdown-item": HTMLShDropdownItemElement;
        "sh-input": HTMLShInputElement;
        "sh-progress-bar": HTMLShProgressBarElement;
        "sh-progress-ring": HTMLShProgressRingElement;
        "sh-radio": HTMLShRadioElement;
        "sh-range": HTMLShRangeElement;
        "sh-spinner": HTMLShSpinnerElement;
        "sh-switch": HTMLShSwitchElement;
        "sh-tab": HTMLShTabElement;
        "sh-tab-panel": HTMLShTabPanelElement;
        "sh-tabs": HTMLShTabsElement;
        "sh-textarea": HTMLShTextareaElement;
        "sh-tooltip": HTMLShTooltipElement;
    }
}
declare namespace LocalJSX {
    interface ShAlert {
        /**
          * Set to true to make the alert closable.
         */
        "closable"?: boolean;
        /**
          * Set to true to close the alert.
         */
        "closed"?: boolean;
        /**
          * Emitted when the alert is closed.
         */
        "onShClose"?: (event: CustomEvent<any>) => void;
        /**
          * The type of alert to draw.
         */
        "type"?: string;
    }
    interface ShButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret"?: boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle"?: boolean;
        /**
          * Set to true to disable the button.
         */
        "disabled"?: boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading"?: boolean;
        /**
          * The button's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * Set to true to draw a rounded button.
         */
        "round"?: boolean;
        /**
          * The button's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type"?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
    interface ShCheckbox {
        /**
          * Set to true to draw the checkbox in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the checkbox.
         */
        "disabled"?: boolean;
        /**
          * Set to true to draw the checkbox in an indeterminate state.
         */
        "indeterminate"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The checkbox's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface ShDropdown {
        /**
          * The preferred placement of the dropdown menu. Note that the actual placement may vary as needed to keep the menu inside of the viewport.
         */
        "placement"?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
          * The positioning strategy used for displaying the menu. If the menu is clipped by a containing element's overflow, setting this to `fixed` usually resolves it. Note that `fixed`` is less performant than `absolute`, so avoid using it when possible.
         */
        "strategy"?: "fixed" | "absolute";
    }
    interface ShDropdownDivider {
    }
    interface ShDropdownItem {
        /**
          * Set to true to draw the dropdown item in an active state.
         */
        "active"?: boolean;
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to draw the dropdown item in a disabled state.
         */
        "disabled"?: boolean;
        "onShoelaceSelect"?: (event: CustomEvent<any>) => void;
    }
    interface ShInput {
        /**
          * The input's autocaptialize attribute.
         */
        "autocapitalize"?: string;
        /**
          * The input's autocomplete attribute.
         */
        "autocomplete"?: string;
        /**
          * The input's autocorrect attribute.
         */
        "autocorrect"?: string;
        /**
          * The input's autofocus attribute.
         */
        "autofocus"?: boolean;
        /**
          * Set to true to add a clear button when the input is populated.
         */
        "clearable"?: boolean;
        /**
          * Set to true to disable the input.
         */
        "disabled"?: boolean;
        /**
          * The input's inputmode attribute.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The input's max attribute.
         */
        "max"?: number;
        /**
          * The input's maxlength attribute.
         */
        "maxlength"?: number;
        /**
          * The input's min attribute.
         */
        "min"?: number;
        /**
          * The input's minlength attribute.
         */
        "minlength"?: number;
        /**
          * The input's name attribute.
         */
        "name"?: string;
        /**
          * The input's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The input's pattern attribute.
         */
        "pattern"?: string;
        /**
          * The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * Set to true for a readonly input.
         */
        "readonly"?: boolean;
        /**
          * The input's required attribute.
         */
        "required"?: boolean;
        /**
          * The input's size, one of `small`, `medium`, or `large`.
         */
        "size"?: string;
        /**
          * The input's step attribute.
         */
        "step"?: number;
        /**
          * Set to true to add a password toggle button for password inputs.
         */
        "togglePassword"?: boolean;
        /**
          * The input's type, one of `text`, `number`, `email`, etc.
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * The input's value attribute.
         */
        "value"?: string;
    }
    interface ShProgressBar {
        /**
          * The height of the progress bar in pixels.
         */
        "height"?: number;
        /**
          * The progress bar's percentage, 0 to 100.
         */
        "percentage"?: number;
    }
    interface ShProgressRing {
        /**
          * The diameter of the progress ring in pixels.
         */
        "diameter"?: number;
        /**
          * The current progress percentage, 0 - 100.
         */
        "percentage"?: number;
        /**
          * The stroke width of the progress ring in pixels.
         */
        "stroke"?: number;
    }
    interface ShRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The radio's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface ShRange {
        /**
          * Set to true to disable the input.
         */
        "disabled"?: boolean;
        /**
          * The input's max attribute.
         */
        "max"?: number;
        /**
          * The input's min attribute.
         */
        "min"?: number;
        /**
          * The input's name attribute.
         */
        "name"?: string;
        /**
          * The range's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The input's step attribute.
         */
        "step"?: number;
        /**
          * The tooltip's position.
         */
        "tooltip"?: "top" | "bottom" | "off";
        /**
          * A function used to format the tooltip's value.
         */
        "tooltipFormatter"?: (value: number) => string;
        /**
          * The input's value attribute.
         */
        "value"?: number;
    }
    interface ShSpinner {
        /**
          * The spinner's size.
         */
        "diameter"?: number;
        "stroke"?: number;
    }
    interface ShSwitch {
        /**
          * Set to true to draw the switch in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the switch.
         */
        "disabled"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The switch's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface ShTab {
        /**
          * Set to true to draw the tab in an active state.
         */
        "active"?: boolean;
        /**
          * Set to true to draw the tab in a disabled state.
         */
        "disabled"?: boolean;
        /**
          * The name of the tab panel the tab will be synced to. The panel must exist in the same `<sh-tabs>` element.
         */
        "panel"?: string;
    }
    interface ShTabPanel {
        /**
          * When true, the tab panel will be shown.
         */
        "active"?: boolean;
        /**
          * The tab panel's name.
         */
        "name"?: string;
    }
    interface ShTabs {
        /**
          * Emitted when a tab is hidden.
         */
        "onShTabHide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a tab is shown.
         */
        "onShTabShow"?: (event: CustomEvent<any>) => void;
        /**
          * The position of the tabs.
         */
        "position"?: "top" | "bottom" | "left" | "right";
    }
    interface ShTextarea {
        /**
          * The textarea's autocaptialize attribute.
         */
        "autocapitalize"?: string;
        /**
          * The textarea's autocomplete attribute.
         */
        "autocomplete"?: string;
        /**
          * The textarea's autocorrect attribute.
         */
        "autocorrect"?: string;
        /**
          * The textarea's autofocus attribute.
         */
        "autofocus"?: boolean;
        /**
          * Set to true to disable the textarea.
         */
        "disabled"?: boolean;
        /**
          * The textarea's inputmode attribute.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The textarea's maxlength attribute.
         */
        "maxlength"?: number;
        /**
          * The textarea's name attribute.
         */
        "name"?: string;
        /**
          * The textarea's tabindex attribute.
         */
        "nativeTabindex"?: number;
        /**
          * The textarea's placeholder text.
         */
        "placeholder"?: string;
        /**
          * Set to true for a readonly textarea.
         */
        "readonly"?: boolean;
        /**
          * The textarea's required attribute.
         */
        "required"?: boolean;
        /**
          * Controls how the textarea can be resized.
         */
        "resize"?: "none" | "vertical" | "auto";
        /**
          * The number of rows to display by default.
         */
        "rows"?: number;
        /**
          * The textarea's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The textarea's value attribute.
         */
        "value"?: string;
    }
    interface ShTooltip {
        /**
          * Set to true to draw the the tooltip with an arrow.
         */
        "arrow"?: boolean;
        /**
          * Set to true to disable the tooltip so it won't show when triggered.
         */
        "disabled"?: boolean;
        /**
          * The distance in pixels from which to draw the tooltip from its target element.
         */
        "distance"?: number;
        /**
          * The delay in ms before the tooltip hides.
         */
        "hideDelay"?: number;
        /**
          * The duration in ms of the tooltip's hide transition.
         */
        "hideDuration"?: number;
        /**
          * The maximum width in pixels the tooltip can be before its content wraps.
         */
        "maxWidth"?: number;
        /**
          * Emitted when the tooltip has fully transitioned out and gets unmounted from the DOM.
         */
        "onShHidden"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip begins to hide.
         */
        "onShHide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip begins to show, but before it gets mounted to the DOM.
         */
        "onShShow"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip has fully transitioned in.
         */
        "onShShown"?: (event: CustomEvent<any>) => void;
        /**
          * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.
         */
        "placement"?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
        /**
          * The delay in ms before showing the tooltip.
         */
        "showDelay"?: number;
        /**
          * The duration in ms of the tooltip's show transition.
         */
        "showDuration"?: number;
        /**
          * A selector or element to use as the tooltip's target. This is the element that will trigger the tooltip to show upon interaction. If no target is specified, the previous sibling element of the tooltip will be used. A common way to link a tooltip to a target is to give the target an `id` and pass `#id` to the `target` prop.
         */
        "target"?: string | HTMLElement;
        /**
          * The events that cause a tooltip to show, separated by a space. Possible values include any combination of `mouseenter`, `focus`, `click`, and `manual`. Use `manual` if you only want to show and hide the tooltip programmatically.
         */
        "trigger"?: string;
        /**
          * Sets the tooltip's z-index.
         */
        "zIndex"?: number;
    }
    interface IntrinsicElements {
        "sh-alert": ShAlert;
        "sh-button": ShButton;
        "sh-checkbox": ShCheckbox;
        "sh-dropdown": ShDropdown;
        "sh-dropdown-divider": ShDropdownDivider;
        "sh-dropdown-item": ShDropdownItem;
        "sh-input": ShInput;
        "sh-progress-bar": ShProgressBar;
        "sh-progress-ring": ShProgressRing;
        "sh-radio": ShRadio;
        "sh-range": ShRange;
        "sh-spinner": ShSpinner;
        "sh-switch": ShSwitch;
        "sh-tab": ShTab;
        "sh-tab-panel": ShTabPanel;
        "sh-tabs": ShTabs;
        "sh-textarea": ShTextarea;
        "sh-tooltip": ShTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sh-alert": LocalJSX.ShAlert & JSXBase.HTMLAttributes<HTMLShAlertElement>;
            "sh-button": LocalJSX.ShButton & JSXBase.HTMLAttributes<HTMLShButtonElement>;
            "sh-checkbox": LocalJSX.ShCheckbox & JSXBase.HTMLAttributes<HTMLShCheckboxElement>;
            "sh-dropdown": LocalJSX.ShDropdown & JSXBase.HTMLAttributes<HTMLShDropdownElement>;
            "sh-dropdown-divider": LocalJSX.ShDropdownDivider & JSXBase.HTMLAttributes<HTMLShDropdownDividerElement>;
            "sh-dropdown-item": LocalJSX.ShDropdownItem & JSXBase.HTMLAttributes<HTMLShDropdownItemElement>;
            "sh-input": LocalJSX.ShInput & JSXBase.HTMLAttributes<HTMLShInputElement>;
            "sh-progress-bar": LocalJSX.ShProgressBar & JSXBase.HTMLAttributes<HTMLShProgressBarElement>;
            "sh-progress-ring": LocalJSX.ShProgressRing & JSXBase.HTMLAttributes<HTMLShProgressRingElement>;
            "sh-radio": LocalJSX.ShRadio & JSXBase.HTMLAttributes<HTMLShRadioElement>;
            "sh-range": LocalJSX.ShRange & JSXBase.HTMLAttributes<HTMLShRangeElement>;
            "sh-spinner": LocalJSX.ShSpinner & JSXBase.HTMLAttributes<HTMLShSpinnerElement>;
            "sh-switch": LocalJSX.ShSwitch & JSXBase.HTMLAttributes<HTMLShSwitchElement>;
            "sh-tab": LocalJSX.ShTab & JSXBase.HTMLAttributes<HTMLShTabElement>;
            "sh-tab-panel": LocalJSX.ShTabPanel & JSXBase.HTMLAttributes<HTMLShTabPanelElement>;
            "sh-tabs": LocalJSX.ShTabs & JSXBase.HTMLAttributes<HTMLShTabsElement>;
            "sh-textarea": LocalJSX.ShTextarea & JSXBase.HTMLAttributes<HTMLShTextareaElement>;
            "sh-tooltip": LocalJSX.ShTooltip & JSXBase.HTMLAttributes<HTMLShTooltipElement>;
        }
    }
}
