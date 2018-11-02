var node = document.documentElement
function callnode(node) {
        var result = {tag: node.nodeName}, nodes, i;
        if (node.childElementCount) {
                result.children = [];
                for (i = 0; nodes = node.children[i]; i++) {
                        for (k=0; k<node.childNodes.length; k++)
                        {
                                if (node.childNodes[k].nodeType === 3 ||  node.childNodes[k].nodeType === 8)
                                {
                                        result[node.childNodes[k].nodeValue] = node.childNodes[k].nodeValue
                                }
                        }
                        result.children.push(callnode(nodes));
                }

        }
        for (k=0; k<node.childNodes.length; k++)
        {
                if (node.childNodes[k].nodeType === 3 ||  node.childNodes[k].nodeType === 8)
                {
                        result[node.childNodes[k].nodeValue] = node.childNodes[k].nodeValue
                }
        }

        for (i = 0; nodes = node.attributes[i]; i++) {
                result[nodes.nodeName] = nodes.nodeValue;
        }
        return result;
}
tagresult = callnode(node)
console.log(tagresult)
// test = JSON.stringify(tagresult)
