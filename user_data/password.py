# 
import re
from username import username
def password():
    global password
    password =re.url("https://github.com/scmylsc/passwords/blob/main/passwords.txt") 
class send_msg:
    def __init__(username,password):
        global username1
        global password2
        password1 = int(password)
        username2 = int(username)
    def msg_wa(password1,username1):
        print(int(username1) + int(password))
