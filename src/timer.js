function Timer(make, delay) {
    this._active = false;
    this._make = make;
    this._delay = delay;
    this._temporizer = 0;
    this.isActive = () => this._active;
    this.start = () => {
        this._temporizer = setInterval(() => {
            this._make();
            this._active = !this._active;
        }, this._delay);
    };
    this.stop = () => {
        clearInterval(this._temporizer);
        this._active = !this._active;
    };
};

export default Timer;
