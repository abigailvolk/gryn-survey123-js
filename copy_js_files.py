import shutil
import os
source = r"C:\Users\avolk\ArcGIS\My Survey Designs\GRYN Discrete WQ Test1\scripts"
destination = r"c:\Users\avolk\Code\gryn-survey123-js"
if os.path.exists(source) and os.path.exists(destination):
    shutil.copy(source, destination)
else:
    print(f"does not exist")