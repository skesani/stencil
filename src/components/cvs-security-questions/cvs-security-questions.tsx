import {Component, h, Host, Prop, State} from '@stencil/core';
import {bind, controlGroup, descriptionFor, labelFor, validationFor, validationMessage} from "../../utils";

@Component({
  tag: 'cvs-security-questions',
  styleUrl: 'cvs-security-questions.css'
})
export class CvsSecurityQuestions {

  @Prop() phoneNumber = '';
  @Prop() ssnIssued = '';
  @Prop() petName = '';
  @State() json = '';

  onSubmit = (ev: Event) => {
    ev.preventDefault();
    ev.stopPropagation();

    const formData = new FormData(ev.currentTarget as HTMLFormElement);
    this.json = JSON.stringify(Object.fromEntries(formData as any), null, 2);
    console.warn('submit', this.json);
  };

  render() {
    const phoneNumber = controlGroup(this.phoneNumber, {
      onValueChange: ({value}) => (this.phoneNumber = value),
      onCommit({value}) {
        console.log(`phoneNumber is : ${value}`);
      },
    });

    const petName = controlGroup(this.petName, {
      onValueChange: ({value}) => (this.petName = value),
      onCommit({value}) {
        console.log(`petName is : ${value}`);
      },
    });


    const ssnIssued = bind(this, 'ssnIssued', {
      validate({value}) {
        if (!value) {
          return 'Select a ssn issue state';
        }
      },
      onCommit({value}) {
        console.log(`SSN issue state : ${value}`);
      },
    });

    return (
      <Host>
        <form onSubmit={this.onSubmit}>
          <section {...phoneNumber()}>
            <div class="group-label" {...labelFor(phoneNumber)}>
            </div>
            <div {...descriptionFor(phoneNumber)}>Which of the following is/was your phone
              NUMBER? {this.phoneNumber}</div>
            <div>
              <label {...labelFor(phoneNumber, '300-5999')}>300-5999</label>
              <input type="radio" {...phoneNumber('300-5999')} />
            </div>
            <div>
              <label {...labelFor(phoneNumber, '300-7999')}>300-7999</label>
              <input type="radio" {...phoneNumber('300-7999')} />
            </div>
            <div>
              <label {...labelFor(phoneNumber, '300-8999')}>300-8999</label>
              <input type="radio" {...phoneNumber('300-8999')} />
            </div>
            <div>
              <label {...labelFor(phoneNumber, 'NONE OF THE ABOVE')}>NONE OF THE ABOVE</label>
              <input type="radio" {...phoneNumber('NONE OF THE ABOVE')} />
            </div>
            <div {...validationFor(phoneNumber)}>{validationMessage(phoneNumber)}</div>
          </section>
          <section>
            <label {...labelFor(ssnIssued)}>Car Body Style: {this.ssnIssued}</label>
            <div>
              <select {...ssnIssued()}>
                <option value="">Please Select...</option>
                <option value="NJ">NJ</option>
                <option value="NY">NY</option>
                <option value="IL">IL</option>
                <option value="NONE">NONE OF THE ABOVE</option>
              </select>
              <div {...validationFor(ssnIssued)}>{validationMessage(ssnIssued)}</div>
            </div>
          </section>
          <section {...petName()}>
            <div class="group-label" {...labelFor(petName)}>
            </div>
            <div {...descriptionFor(petName)}>Whats your pet name? {this.petName}</div>
            <div>
              <label {...labelFor(petName, 'snoopy')}>SNOOPY</label>
              <input type="radio" {...petName('snoopy')} />
            </div>
            <div>
              <label {...labelFor(petName, 'ace')}>ACE</label>
              <input type="radio" {...petName('ace')} />
            </div>
            <div>
              <label {...labelFor(petName, 'adam')}>ADAM</label>
              <input type="radio" {...petName('adam')} />
            </div>
            <div>
              <label {...labelFor(petName, 'NONE OF THE ABOVE')}>NONE OF THE ABOVE</label>
              <input type="radio" {...petName('NONE OF THE ABOVE')} />
            </div>
            <div {...validationFor(petName)}>{validationMessage(petName)}</div>
          </section>
        </form>
        {this.json !== '' ? <pre>Form Submit {this.json}</pre> : null}
      </Host>
    );
  }
}
