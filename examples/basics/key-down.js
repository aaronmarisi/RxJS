var subscription;

(() => {
    function listen(element, eventName) {
        return Rx.Observable.create(observer => {
            // Create an event handler which sends data to the sink
            let handler = event => observer.next(event);
    
            // Attach the event handler
            document.addEventListener('keydown', handler, true);
    
            // Return a cleanup function which will cancel the event stream
            return () => {
                // Detach the event handler from the element
                document.removeEventListener('keydown', handler, true);
            };
        });
    }

    subscription = listen().subscribe(evt => {console.log(evt)});
    // subscription = listen()
    //     .map(evt => evt.key)
    //     .filter(key => key === 'c' || key === 'r')
    //     .distinctUntilChanged()
    //     .subscribe(evt => {console.log(evt)});
})();