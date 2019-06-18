openssl aes-256-cbc -K $encrypted_d28a1c99fad8_key -iv $encrypted_d28a1c99fad8_iv
  -in travis-key.enc -out travis-key -d

  eval "$(ssh-agent -s)"
  chmod 600 deploy-travis
  ssh-add deploy-travis