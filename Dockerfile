FROM google/nodejs

EXPOSE 12617

WORKDIR /etc/services/dmcloud_evaluation
ADD mock .
RUN ["npm", "install"]

ENTRYPOINT ["node", "index.js"]
