import React from "react";

export function isNull(data) {
  if (data == "" || data == "null" || data === null) {
    return true;
  } else {
    false;
  }
}
