FROM node:15.9-alpine

# ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
# ENV NEXT_PUBLIC_MATOMO_SITE_ID="33"

WORKDIR /app

COPY . /app/

RUN yarn --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
