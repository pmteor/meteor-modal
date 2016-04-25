import { Template } from 'meteor/templating';
import { ReactiveArray } from 'meteor/manuel:reactivearray';
import { ReactiveVar } from 'meteor/reactive-var';

class ModalClass {
  constructor() {
    const self = this;

    // MODAL LIST
    this._list = new ReactiveArray();

    // REACTIVE VARIABLE PROGRESS FALSE
    this._progress = new ReactiveVar(false);

    // POPUP TEMPLATE
    this.template = Template.modal;

    // EVENTS
    this.template.events({
      'click .js-close'(event, instance) {

        // CLOSE LAST MODAL
        self.close();
      },

      'click .js-confirm'(event, instance) {

        // PROGRESS START
        Modal._progress.set(true);

        // callback run.
        this.confirm(instance, this);
      }
    });
  }

  getModalName(name) {
    return `${name}Modal`;
  }

  open(name, close) {
    const self = this;
    const _name = self.getModalName(name);

    return function(event, instance) {
      event.preventDefault();

      // CONTEXT DATA
      const context = this;

      // if close then all modal closed.
      if (close) {
        self.closeAll();
      }

      self._list.push(Blaze.renderWithData(self.template, () => {
        return {
          _name,
          context,
          isConfirm: _.has(this, 'confirm'),
          index: self._list.length
        }
      }, document.body));
    }
  }

  confirm(name, confirm) {
    const self = this;
    return function(event, instance) {
      const context = this;

      // success callback
      context.confirm = confirm;

      // PROGRESS NOT GET VARIABLE
      context.progress = self._progress;

      // open new modal
      self.open(name).call(context, event, instance);
    }
  }

  close() {

    // PROGRESS STOP
    Modal._progress.set(false);

    // REMOVE
    Blaze.remove(_.last(this._list));

    // POP LIST VIEW
    this._list.pop();
  }

  closeAll() {
    return _.each(this._list, () => {
      this.close();
    });
  }
}

export const Modal = new ModalClass();
