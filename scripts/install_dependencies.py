import os

def npm_install():
    os.system("npm install")

root_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..")
srv_path = os.path.join(root_path, 'src')
client_path = os.path.join(root_path, 'src', 'client')

os.chdir(client_path)
npm_install()

os.chdir(srv_path)
npm_install()