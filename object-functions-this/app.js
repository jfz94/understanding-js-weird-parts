console.log(this); // window object //

function a() {
    console.log(this); // window object
}
a();

b = function(){
    console.log(this);
}

b();

var c = {
    name: 'The c object',
    log: function(){
        // by reference
        var self = this;
        self.name = 'Update a c object',
        console.log(this); // c object //

        var setname = function(newname){
            self.name = newname;   
        }
        setname('Updated again');
        console.log(self);
    }
}

c.log();

///////////////