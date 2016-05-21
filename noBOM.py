import os
import sys
from Npp import *

filePathSrc="C:\\Users\\yuhen\\Documents\\GitHub\\GrimDawnZH\\hanhua\\"
for root, dirs, files in os.walk(filePathSrc):
	for fn in files:
		if fn[-4:] == '.txt' : 
			notepad.open(root + "\\" + fn)
			notepad.runMenuCommand("Encoding", "Convert to UTF-8")
			notepad.save()
			notepad.close()