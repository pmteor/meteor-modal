class ModalClass {
  constructor() {
    const self = this;

    // TRACKER
    this._dep = new Tracker.Dependency();

    // POPUP TEMPLATE
    this.template = Template.modal;

    // MODAL LIST
    this._list = [];

    // EVENTS
    this.template.events({
      'click .close'(event, instance) {

        // CLOSE LAST MODAL
        self.close();
      }
    });
  }

  open(name) {
    const self = this;
    const _name = `${name}Modal`;

    return function(event, instance) {
      event.preventDefault();

      // CONTEXT DATA
      const context = this;

      self._list.push(Blaze.renderWithData(self.template, () => {

        // DEPEND
        self._dep.depend();

        return {
          _name,
          context,
          index: self._list.length
        }
      }, document.body));
    }
  }

  close() {

    // REMOVE
    Blaze.remove(_.last(this._list));

    // POP LIST VIEW
    this._list.pop();

    // CHANGED
    this._dep.changed();
  }
}

Modal = new ModalClass();
