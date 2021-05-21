import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'cvs-input-wrapper',
  styleUrl: 'cvs-input-wrapper.css',
  shadow: true,
})
export class CvsInputWrapper {

  @Element() public el: HTMLElement;

  @Prop() public label: string;
  @Prop() public hint: string;
  @Prop() public error: string;

  public hostData() {
    const inputEl: HTMLInputElement | HTMLTextAreaElement = this.el.querySelector('input') || this.el.querySelector('textarea');

    return {
      class: {
        'cvs-input-wrapper': true,
        'cvs-input-wrapper--has-error': this.error,
        'cvs-input-wrapper--disabled': inputEl ? inputEl.disabled : false,
        'cvs-input-wrapper--required': inputEl ? inputEl.required : false,
      }
    };
  }

  public render() {
    const labelEl = this.label ? (<div class="cvs-input-wrapper__label">{ this.label }</div>) : null;
    const inputEl = <div class="cvs-input-wrapper__input"><slot /></div>
    const hintEl = this.hint ? (<div class="cvs-input-wrapper__hint">{ this.hint }</div>) : null;
    const errorEl = this.error ? (<div class="cvs-input-wrapper__error">{ this.error }</div>) : null;

    return [ labelEl, inputEl, hintEl, errorEl ];
  }
}
