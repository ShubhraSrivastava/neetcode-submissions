/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root === null) {
            return false;
        }
        if(this.isSameTree(root, subRoot)){
            return true;
        }
        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot))
    }
    isSameTree(root1, root2) {
        if(root1 === null && root2 === null) {
            return true;
        }
        if(root1 === null || root2 === null) {
            return false;
        }
        if(root1.val !== root2.val) {
            return false;
        }
        return this.isSameTree(root1.left, root2.left) &&
            this.isSameTree(root1.right, root2.right)
    }
}
