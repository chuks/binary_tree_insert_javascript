function BST() {
    this._root = null;
}


BST.prototype = {
    
    //define constructor
    constructor: BST,
    
    //to add new node
    add_node: function(value){
        //create a new node
        var node = {
            value: value,
            left: null,
            right: null
        },

        //traverse tree
        current;

        //used for case where tree is null
        if (this._root === null){
            this._root = node;
        } 
        else {
            
            current = this._root;

            while(true){

                //check value of current node. Go left if value to insert is less.
                if (value < current.value){

                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                // else go right 
                } 
                else if (value > current.value){

                    //oops..maybe there's no right. Insert new node here.
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }       

                //here's the crust of the pie. Ignore insertion if value is the same
                } 
                else {
                    break;
                }
            }
        }
    },
    
    //this will convert the tree to an array and display in JSON format. Sorry, JSON just happens to be my favorite ;)
    toJSON: function(){
        return JSON.stringify( this.toArray() );
    },
}
