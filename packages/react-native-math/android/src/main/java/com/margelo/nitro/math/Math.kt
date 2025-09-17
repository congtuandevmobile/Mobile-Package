package com.margelo.nitro.math
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class Math : HybridMathSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
