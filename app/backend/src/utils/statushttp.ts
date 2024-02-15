function statushttp(status: string): number {
  switch (status) {
    case 'SUCCESS': return 200;
    case 'CREATED': return 201;
    case 'BAD_REQUEST': return 400;
    case 'UNAUTHORIZED': return 401;
    case 'NOT_FOUND': return 404;
    default: return 500;
  }
}

export default statushttp;
