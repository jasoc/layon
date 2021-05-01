import os

root_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..")
srv_path = os.path.join(root_path, 'src')
client_path = os.path.join(root_path, 'src', 'client')
build_path = os.path.join(root_path, 'dist')

os.chdir(client_path)
os.system('npm run-script build')

os.chdir(srv_path)
os.system(f'electron-packager ./ layon --platform=win32 --arch=x64 -p --win --out {build_path}')