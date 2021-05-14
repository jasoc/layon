import os
from subprocess import Popen

def npm_start():
    os.system('start npm.cmd start')

root_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..")
srv_path = os.path.join(root_path, 'src')
client_path = os.path.join(root_path, 'src', 'client')

os.chdir(client_path)
npm_start()

os.chdir(srv_path)
npm_start()