from typing import List

# Helper node class for Tree
class Node:
    def __init__(self):
        self.children = {}
        self.isEnd = False

class Feature:
    # Build search tree at initialization
    def __init__(self, listModels: List):
        self.searchTree = Node()
        for modelNumber in listModels:
            self.buildSearchTree(modelNumber)

    # build search tree for 1 model number, isEnd marks when it's the end of a model number
    def buildSearchTree(self, model):
        node = self.searchTree
        for char in model:
            if char not in node.children:
                node.children[char] = Node()
            node = node.children[char]
        node.isEnd = True

    # use search tree build for the list of model numbers to search them in the given html
    def tag_html(self, html):
        result = {}
        textLength = len(html)

        # helper, searches for any model number that starts at this character in the html
        def searchThroughTree(node, start):
            modelNumber = ""
            j = start
            while j < textLength and html[j] in node.children:
                modelNumber += html[j]
                node = node.children[html[j]]
                j += 1
                if node.isEnd:
                    if modelNumber in result:
                        result[modelNumber].append({"start_index": start, "end_index": j})
                    else:
                        result[modelNumber] = [{"start_index": start, "end_index": j}]
            return

        for i in range(textLength):
            searchThroughTree(self.searchTree, i)

        return result

# Sample usage
modelNumbers = [
    "PB62WH",
    "CA416",
    "HU6630B",
    "MDC9082-1",
    "CA960",
    "ACL104RA2-10",
    "DBA2182S.",
    "278062",
    "ACL104RA2-3",
    "IEBC001",
    "IEBC001"
]
modelFinder = Feature(modelNumbers)
html = "<html> <body> ABC HU6630B XYZ HU6630B <span>IEBC001 - ACL104RA2-3</span></body><html>"
result = modelFinder.tag_html(html)
print(result)

