#include <jni.h>
#include "RNMathOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::rnmath::initialize(vm);
}
