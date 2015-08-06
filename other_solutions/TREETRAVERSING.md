## Traversing a tree  - Depth first

Trees are not linear data structure with a logical start and a logical end, where for each node we have only one next element.

At a particular node in a tree we can have more than one particular direction/element. Tree traversal is the process of visiting each node in a tree exactly once. There are generally two methods of tree traversing:
1. Breadth first
2. Depth first.

In depth first approach, if we go to a child we would complete the whole subtree of the child before going to the next child.

#### There are three strategies of traversing trees depth first
1. Root node first, then left subtree, and finally right subtree  - named  Pre-order traversal
2. Left subtree first, then root node, and finally right subtree - In-order traversal(recursion)
3. Left subtree first , then right order, and finally root node - post order traversal( a sorted list)

Conventionally, the the left subtree is always visited before the right subtree.

#### Pre-Order traversal

There are three (3) Steps:
1. Visit the root
2. Visit the left
3. Visit the right

### Example algorithm below

void preOrder(Node root){

     if(root == null) return;
     
     root.printNodeValue();

     preOrder( root.leftNode() );
     preOrder( root.rightNode() );
     
}


