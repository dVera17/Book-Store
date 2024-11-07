import "dotenv/config";
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT_SERVER').required().asPortNumber(),
    HOST: get('HOSTNAME_SERVER').required().asString(),
    DB_URL: get('DB_CONNECTION_STRING').required().asString(),
    DB_NAME: get('DB_NAME').required().asString(),
    SECRET_KEY: get('JWT_SECRET_KEY').required().asString(),
}