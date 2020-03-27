import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sm-components',
  styleUrl: 'components.css',
  shadow: true
})
export class Components {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
