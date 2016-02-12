#include "learnuv.h"

#define BUF_SIZE 37
static const char *filename = __MAGIC_FILE__;

/* Making our lifes a bit easier by using this global, a better solution in the next exercise ;) */
static uv_fs_t open_req;

void read_cb(uv_fs_t* read_req) {
  int r = 0;
  if (read_req->result < 0) CHECK(read_req->result, "uv_fs_read callback");

  /* 4. Report the contents of the buffer */
  log_report("%s", read_req->bufs->base);
  log_info("%s", read_req->bufs->base);

  /* 5. Close the file descriptor */
  uv_fs_t close_req;
  if (r < 0) CHECK(r, "uv_fs_close");

  uv_fs_req_cleanup(&open_req);
  uv_fs_req_cleanup(read_req);
  uv_fs_req_cleanup(&close_req);
}

int main() {
  int r = 0;
  uv_loop_t *loop = uv_default_loop();

  /* 1. Open file (synchronously) */
  if (r < 0) CHECK(r, "uv_fs_open");

  /* 2. Create buffer and initialize it to turn it into a a uv_buf_t */

  /* 3. Use the file descriptor (the .result of the open_req) to read **aynchronously** from the file into the buffer */
  uv_fs_t read_req;
  if (r < 0) CHECK(r, "uv_fs_read");

  uv_run(loop, UV_RUN_DEFAULT);

  return 0;
}
