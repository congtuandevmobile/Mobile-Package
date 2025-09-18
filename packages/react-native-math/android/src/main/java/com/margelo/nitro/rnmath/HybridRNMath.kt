package com.margelo.nitro.rnmath
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class HybridRNMath : HybridRNMathSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
