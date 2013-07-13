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

                //if the new value is less than this node's value, go left
                if (value < current.value){

                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                //if the new value is greater than this node's value, go right
                } 
                else if (value > current.value){

                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }       

                //if the new value is equal to the current one, just ignore
                } 
                else {
                    break;
                }
            }
        }
    },
    
    toJSON: function(){
        return JSON.stringify( this.toArray() );
    },
}
