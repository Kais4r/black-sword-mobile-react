# black-sword-fantasy-rpg

`bun dev`

`bun tauri dev`
`bun tauri android build --apk`

Initiate Android project
`tauri android init`

"R:\Apps\IDE\Android\AndroidStudio\jbr\bin\keytool.exe" -genkey -v -keystore ./keys/upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload

"R:\Apps\IDE\Android\AndroidStudio\jbr\bin\keytool.exe" -importkeystore -srckeystore ./keys/upload-keystore.jks -destkeystore ./keys/upload-keystore.jks -deststoretype pkcs12