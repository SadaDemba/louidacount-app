/** @type {import('next').NextConfig} */
const nextConfig = {
    API_BASE_URL : {
        'local': "https://localhost:7032/api/",
        'docker': ""
    }
}

module.exports = nextConfig
