interface LogoProps {
  width?: number;
  height?: number;
}
export const Logo = ({ width = 28, height = 28 }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 128 128"
      enable-background="new 0 0 128 128"
    >
      <image
        id="image0"
        width="128"
        height="128"
        x="0"
        y="0"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAA CXBIWXMAAABgAAAAYADwa0LPAAAhGklEQVR42u2deUAVVfvHvzPsOwIiKnJFBFwq10JRcCPfMgwt hVKx1NTEpULczeVnZvj6qlmZe5ll7kq5VJriUq74vqVS7IqoKIisigJzfn9MBy5z514ucoG5cL5/ 3Ll35pw5z3POfM6d5ZlzODQSOSzZtSvzZ09Pk99NbEv/7tYN68kI+Pj4wAXPkfh27bhpHEcOtW1L /EkxvnN15SNIZ2JtbQ0fbOZCbGxwm2wnW+3tOY4QQirvmxCA4zTXqq/RzCf+5jippdL1mvnE/dFv +uVTt0/8Vvm3ej5tfhkin7q/8vurKp/UL839AAAeExPSLD8fmzEcB4qKuL3oiu+LitAMpWR2Vha3 G50QmJRENgmLsDghgU8gUfgxMZF0NG2HlXFxiX5TN/mFpKVV6yAzQnE134Uy5BwT45892M5OeLv0 pSdugwfjJDdXsA8K4laQkRD69cNBhJLI1q01QdU80OQOKAa+kYBfZX1I18vnF2LJv3AkLY3bQMZz jidOIANHhHvHjvFC2R1h+sGDCVtmtevdtKAARi4j7AB27SLExMTJwpy/cyooiLTFEXIwPJysEFoi YuhQfiQ6EzNra10HmPp6Bj4DX319RS75JfkMBWRJURH3GEe4jvv3k3DyX5Lw7bfJ+Q9Le8YcPQos 5jhOEGAkMoIOYP06IpiZOYa5Tclc8Oab6CuMw1dz53Jz8ZJwwddXF8AMfLn6qLxVzi8GvtyycvnS 9GQjGYfVaWmcL0kAPv20pPmT3o93rl9/g1vM9eOKi6FQKbADWEgI4Xn7u11mZXqPH8/lIxAP5s3j XyAl5EqrVkDVADPw5eqj8lY5vxj4ckvd4Gvdf5AwA93S04kL/sTRjz5K+ai0m3/w5s1KO0NQTAfg sCdm6620Ll1wmmzixq9dy23FdHzTo4euA4aBz8BXHPjSSwbyT3lXSTgXffmyyYtclNApIiLpzIK9 AR+dP496Vj12AIcTk6ZYWDiQx962+6OjuS68M1k3dSquky3oxvMMfAZ+depRqeBrpJssLOBCysrI DwCZtmYN/1rOkfw358xJnvbZoEE+jx+jjlXnHYDjR4f23OmhUkFV8ggzdu7EVNiRnn5+5QYx8Bn4 1ahHowFfy36Ez4Wx3CuXL/N/mahM7MLCUiIXcz1vJSejjlRnHYBD3IHS24eHDoUn3uASv/6aa4NR JNTevtwQBj4Dvxr1aOzga5aDIdyivDxuCQkTOrz1VsrIpSmBn8XEoJbF13YBDuSHnXfI229zH2EG d3nXLgY+A19XOzVC8Gn6/cJCBwdyi5zjtuzd2+binHMnkydORC2r1s4AHBx++E/m8FmzOE7wIms+ +UTqMgOfgV+demzA4Ev2IynnhOBBVNHRaarlEX1Us2fDwDL4GYBj65ixdy4vXMjAZ+Az8GsAPi2n L3cD12fNan1m5rlTKz/8EAaWwc4A7O8emHmn7cSJvC/8cXrdOqnLDHwGfnXqsdGDr8UO2JMD3Oap U9P+WJEU+M3nn6OGqvEZAL25x4chGHO++ELqMgOfgV+demTgy9tRvgwlO8l3q1d79okaFXt18GDU UE99BmD/9f7l9+y8vLi3+I/LJsXFcU3I1+R9B4fyHTPwGfjVqEcGvrwd0vLK0/KkHWxzc4VSYbjJ o27d0tNXOwYEpKaimnqKMwAxgIffyEULPXbtYuAz8HW1EwPfwODTbwKJR6GjI/cugkuzdu5su2bq 4cOJFhaopqrdAdDIPVzDZmFr164VDcnAZ+BXpz6k6xn4cuVpgC/Zzm0g3dCke/dSd87aev3HH6Oa 0rsDcHDYv//27W7duH7cabJgypSKhmTgM/CrUx/S9Qx8ufKqAl9j/RU8ISvee0/1xtTDJwd36QI9 pUcHsJAQwvPc51whFn7xBf6HHAw2MWHgM/CrU48MfHk7agw+Tb2F/IhYExOEkn8JjuvXAwvJQsJX yXeVCehruZgKOyz282PgM/CrU48MfHk7DAY+kaT7gEwjY55/XmWRZdZ3xJgxqEI6OgBxIA7OldtL Ds+Zw8Bn4FenHhn48nbUGvhSO2LIRVxcsKDDruHDdu00N4cWae0AHJa4BtzxHj2adxJWwFalkjYE A7+ifDk/K+yXNjADn4Ffe+CXt+tEbCAbPDwKdjvtdt49YgS0SKYDEMfc41twIVzXWbOkDcHAryhf zs8K+6UNzMBn4Nc++OrpCQEQjFYInj1b2z0BjRVNzpquzHR/8UVEkX8Lq729GfgMfAa+rnLk7ah3 8Gl7f0gGoZWvb6t9t54N9BswABJpngEM4poLS8LDGfgMfAa+rnLk7VAK+BqXBG9wD8m18HBIVN4B OL18OPH+IXt7sp08i35DhjDwK8qX87PCfmkDM/AZ+MoBv/zbBLIWl197renwiF0niK0t3WZKvwhf Fq9+XDx4MN8VQWxc/YYLvr+/u7utrbi98r4FgRDg3LmMjPx8ufqQ7o+BL1ee4sCnnzFkN27a2Fg+ KV4qBAQHiyl27CjvALh8rBF+HzAAIDHwq9gBA79hgf/NNyEhvr7QqvDwffv+/hs4f17sCBj48nYY DfhS/6+iIyL690dTAIt27Ci/BCifQgsM/IYEPq2Hd9/t2rV5c1SpCRO6dWvenIGvzQ6jBZ8unxEW C3/170/z8HTSTDZ3XsMEv08fDw8HB8Dfv1WripEYtSsgQKVycAB696bpGfhy5Rkd+HSLOS7hHS8v T8txbr/mqFQ8nS2Xgd+wwDcxEb/PmOHv7+6OamvmzIAADw/AxITjxLIY+EYNvsS/kkklP5VFd+3K I5JYCoMqXxUy8OXWGwf49PP119u3d3YGfH2dna2sUG35+rq4WFsDISHifhj42tMZE/jl+QYROy7I 15dHLyzifhA7AAa+3HrjAt/S0tSU54GpU194oUUL1Fjvv+/v36oVYGUl7peBb+Tg03K2CZnE0teX 54bDiyTpjvgT1zPwa5Kvrp7jT5jQtaubG+DmZmur/RUQ/dWsmbifMWPoTUQGvlGDT4+rHqQLN8rH hycLSBP0cnZm4Bs3+C4uVlampsDYsZ07N2sGg2vCBPGMomlTGxtTU3VrGfhS+5QMfvkyiQtGG2dn nmuP1/G+nR0D3zjBp+kiI3v0aNkSsLExNzcxgcFlbS3ud8oU8ZKAgS9tJSMBn6ZeTAaRaXZ2POdE bpHRFaGBDHzjAr9tWycnKyvgtdfat3dxQa0rNLRTJ1dXwNvb2dnaWt1eBr78fipSKQH88uNtsxCC BXZ2PHpwoehmbc3ANy7wab45c3r3btUKMDHhec06N7zoY8GoqD59WrWSt6+ylwx8JYFf7v8pPAPY 2PBcgrCT9K78njADX/989QV+jx4tW9rZAYGBYuBOXat/f29vJyfA39/TUyyfgS9Nr0jw6d4ukCFk Bc/Af9p89QU+z4spZs0S//nrW7Nn9+/furVoF7WWga87Xb2CL0lX/mSXga9s8OnvIUPatXNxATp2 dHW1sUG9q337Zs1sbIDg4I4dxXsQDHxt6ZQEPt3CM/CNA3yqUaM6daqNx3w11fTp/fqpVICFhWbA EANfl//1Az5dz2tuEMXAVxb4dP327X/+efcuFKcWLRwcLCyAMWP8/MQIRAa+ksFX6wAY+HL5lAY+ Xb9//7VrWVnAtWv37hUVQXGaNKl3b3d3wMXFxsbMjIGvVPA1zgAY+MoGn+YXx+0Bli8/derGDShO NjYWFiYmQEREQIC2x4QMfO3+1RX4dCvPwDcO8KX5z55NT8/PB06dSkvLzYXiNHLkCy80bw60bdu0 qXzAEANf3v+6AZ+u0bgHwMBXNvjShl+2LDb2xg2grIyeGyhDNDBp+vSgIPVpZRj4ygBf7RKAgW+M 4NNlSkp29qNHwJ49V67cuwfFaeDADh2cnYHnn6cBSwx83eVopq8N8Ms7AAa+cYIvtXv16tOnb94E CgsfPy4rg+I0Z87LL3t6Si3X5RcDvzbBVzsDqLxDBr5xgU8/s7OLikpKgI0bz5+/fRuKU6dOrVrZ 2QHBwc8917SpLr8Y+HUBPk3JV3XAMvCVDb40/ZYt58/fugXcvp2f//gxFKcZM156ydMTMDc3MZEL GGLg1w34ND3PwG8Y4NM1xcUlJYIAfPrpyZM3b0Jxcndv0sTSEhg92t9fPWCIgV+34FPx2hxh4FO/ agd8OmiHocCX7v/AAfGmYHx8ZqYSA4YmTx4wwMMDcHCwtlYfYYiBL/WwdsCn23npCgY+9at2//Fn zBCH3fb2Fgf0MBT49LcgCAIALF36yy9paVCcHBzEIcymTNF8TMjA126vocBX6wAY+HUJvru7vb2F BTBqVOfObm5AVJTYERgKfOkBef789et5ecDx44mJOTlQnEaP7tWrZUtApXJ2trTU9EOzthn4hgCf puAZ+NSv2gWfbp05MzBQpQLMzExMOA7o18/Lq0kToFev1q3VZ+KpKfjSdJ988ssv168DpaVlZdI9 1KdoPcyYMWiQ+JiQgS8tR87umoIvewnAwNdsGEOB37mzm5utLTBwoDiSjlSzZvXpo1LJ1UfNwKe/ U1Ozsx8+BHbujIvLzITi9MorXbq4ugLdu7dp4+DAwK9t8KmqfAzIwK8Z+HT77NlSwCurXTtxgI8h Qzp2pM/JDQG+dD+rV584kZ4OFBQUF5eWQnGaOzckxMtLrn0Y+LrLkbdb23FE1/IM/MrpDA3+oEE+ Ps7OQNeu4hh+VSkyMjDQw0N9Jh75hq0u+PRXTk5hYUkJsG7d6dMZGVXbU9fq0kW8FHrpJW0BQxXe MfC1210V+GqXAAz82gDfzEx8GSYykr4Wq5+aNbOzMzcHxo6tGFijspdPB740/Vdf/fbbrVtARsaD B8XF+ttXV5o589VXvbzEewS85EKVga/dbn3Bp2sqjQcgbwgDvzrg0yW9y+/h4ego3t2uniZMECf6 aNrUxsbc3HDg0y2PH4sBQytWiDcHlSZPT1dXKytg1KiAgBYtGPiGBr/8DICBb1jw7e3NzU1NgUmT RICfVnQmnvfeCwysavz96oAvtffgwT/+yMoCLl8WxxdQmt5//5VXPD0BR0drazMzTfvVPZf3n4Gv yy5e0xAG/tOAT5cRET17tmgBODqKgS411bBh4t1xX19XVzqwhpydT3tACoI4jsDy5UeOKDNgSIwU nDRp4MDqxktU9r9yrsYOPhWvCZy0QAa+PuC7uzs4mJsDo0aJs/MaSnQmnlmzgoJat9a0syYHpHqO CxdSU/PygKNHr127f99w9htK48YNGNCqFeDh0bSpesAQA1/qrX7gU//V5gWQFsjA1wd8+i0qSgzw qXjLzbAKDGzbtkkTICBADBwyFPjS7dHRhw6lpioxYEh8KjJ9+quvtmnDwJdaUV3wyy8BGPg1A/+5 58QAn5dfbtfO2Rm1rnnzxNdp6ZmB1O6nBZ8uU1Pv3Xv4EPj++/Pn79ypfX+qq5CQF15wcwM6daoc OcnArx745R0AA7/yen3Bp5+zZ4sTYmgL8DG06CCbw4Z16SJOEGIY8Cv8F3+tXv3zz9evKy9giHZ7 8+eHhnp7q/sv7x8DX7fdslODMfDlK1Q9/4sviiG93bu7u4v/RHWryMigIA8PwMZGfFpgKPDpt5yc goKSEmD9+l9/VeK4An5+Pj6OjsCLL3bpIhcwxMDXbbfaJQADX1cFSe3kefE/iEbs1ZdcXGxtzc2B 8ePFiTgMBb50++bNsbE3bwK3byszYGjuXPFMwNSU/+fFNga+PuDTbwZ7DNjQwafpR47s3LlZM8DL y9lZfI+/fjV+fECAuzvg5mZvb25e2U9tS33Ap7+Li588EQRg1aojR5QYMOTl5eZmbQ28+WafPmLc BQNfWznqFtDUNX4M2FjAt7MTT7UnT+7VS/zHVYYsLc3MeB54553AQPUzgZqCL62/vXvPn8/MBOLj MzIKC+vba0198MHQoW3aALa2lpaV4y8Y+OoWSPf/1I8BGwv49PfEiWJkn5MTjUhTlk6c+OsvccAP w4JPt9KAoSVL9u1LTq5vbzXl4iKeAUVEBAfTeInK/jPw5bZX+zFgYwPfzc3W1swMGD26e/fmzaE4 xcYmJOTkAGfOJCY+eFDZP0OAL0139mxCwoMHwMmT8fFKHGFo/PiXX1apgJYtnZ0tLBj4uo5/Qqrx GLCxgU/XREX17atSAVZW4qm2UkSnAouOPnRIDOGtXfClyyVL9uxJSgJKS5U1JZmlpbm5GDA0bFjb tpr+MfArW1zlY8DGCn779uIAHYMH0wE6lKU9ey5dunsXSEi4c0cc9bduwKdKShLL3bPn99+VGDD0 +usBAc2bA88916YNDRhi4GvayzPw5Rti9uz+/Vu3Fh/7QUGqGPf/l1/E6cHrFnzpAfnvf8fEpKYC RUXFxUqakow+rp0/f+RIHx/tfjVW8Ms7AKnjjR38/v3FAB9/f09PcTJLZWn9evG5fGZmbm5xcf2B T5fZ2Xl5T54AGzcePZqeXt+1oyl//44dnZyAfv06d3ZxqbC7sYNPt/KaADdO8GlsfVRU3771GeCj TdnZBQVPngCbNokdQH2DL7Vgw4aff75xA7h3Ly9PiVOSLVgwenS7dhXTlld40DjBp9/4xg4+VWio GODj7S3G2itN//nPTz9dv64++68ywKefhYXiJcDKlQcOKHFcAW9vd3cbGyAsrH9/+YChxgW+1ksA +q2xgG9tbWZmYgJMnVq9sfvqSsnJd+8+fAjs3n3xojict7LAl9bzzp2nT9++DSQk3LqlxIChmTPf fNPbWz1gqHGCT/UUjwEbBvj098SJPXuKY++Jz/uVpqVLf/wxJQUoK6Pv5ysTfLosKysrEwRg2bJd u5QZMCQO3DJx4quvqg+w0tjA1zgDaGzgu7qKL9OMGePnp8QAn7Nnk5Nzc4HYWM0IPyWCL23n48f/ +CM7Gzh9+upVJQYMRUS89pqnJ+DmRqckq+xtQwefbtfjMWDDAp8uP/igTx9x/H3xEkApomE1y5b9 +GNqqi6/lAm+dPtHH+3YkZgo+iVtkfqUpaX4bsf06W+8UTlgqHGAT6XjMWDDBJ8Orjl0aKdOSgzw 2bfv0qXMTODKlZs3Cwrk/DIO8Gk58fE3bhQUAHv3njmjxIChsLCgIHd3oH17lUqcuKVxgK92CdA4 wKcNMnv2gAGtW8sNqVW/ogE+q1aJd/uNHXzp+uXLxXsCjx49eaKkgCH6WHDevLff9vXVXc+661vf elYG+FR8YwE/MFAcTLN3by8vR0coTps2nTyZkQHcvp2TIw680TDAp8rMzMl5/BjYtOnIESUGDPXv 371706ZAnz5du7q4NHzw6XZeDuCGBD59gScqqn9/laqqw6DuRefqW7/+119FMBoW+NL9fPFFTExa GpCVlZurxIChDz8cN659e/G4EY/phgm+2iWAqIYGPv39+utigE+HDm5uNjb6HAJ1q1WrfvopLQ0o LHz0SBx8s2GCT1MXFj58WFoKrF69b594k1NZ6tDB09PODhg+PChIbm5G/etZ2eBT8Q0VfEtLcRz5 adP69FFigA8dfnvHjrNnxZtjDRt8abrvvjt27OZNIDFRmSMMzZ791lu+voC1tYWF+lOihgK+2hlA wwKfasIEf/+WLYHmze3tLSyqbvC61rJlP/wgTsBRWqpueUMHn26hfkdHb9+elFTfraEpNzcXF0tL YMKE11/39Gx44NNvPF6GL9YKQkMB39lZHLJr3Dgxwk9punAhJSU3Fzh27MqV7Gxp7cn537DAl+7n 558vXLh3D/jttytXlBgwNGVKWJiXF+Dq2qSJ+EfSMMBHBzKaGyUIPHmHHCI3Hz40dvDp7w8+6NdP HC+/8qlbfYtavXTpgQMpKZrrGxv4Uvv+7/+2bv37b+UFDNnYiJO8RkaGh8uPK2Bk4NPfd0kZmV5U xPPJSEB0YaGxg+/l5eJiZQUMH05nzFGWYmLi4u7eBf78Mz29oICBr24FIcDVq6mp+flATMzp0+JL T8pSeHhwsIcH4OtLA4aMFPx/llw3MgjnCwp43CbDyLNizBlgfODT/cyZM3CgOGeessbwKSkRX45Z terw4evXGfhS8KXbo6O//TYxEXj8WJyPQCmqCBiaMKFdOyMGn7LRHt1xuqCAx1GcRNn9+8YKvp+f SuXgAPTt6+3dpEmN29ng2rIlNjYjA7hxIzv70SM5/xn46subN8XXnzdvPnhQHPJMWRo40N+/WTMg IEAMGDI68Gn+zxBJLt2/z2MLTLnBSUnGBj4N8Jkz51//8vQ0UOsaUHl54vPuL788elScW4+Br9uv yuWsWbN7d0oKkJOTn//kSX20oG4tWhQR0bGj3JiRCgefarpQhsjERB7LBf+y6IQEYwGf/n711Wef dXUFnnmmRQtbW4O0qUH16adiTH9ublGReAAz8HXZK7U6P1+MkFy9escO9ZumStEzz3h729sDQ4cG BcmNMKRY8Gnqi6QrPk5I4Pl22MqHJiRIC1Qq+ObmJiY8L86Oq8TQ3vT0+/cfPQK+/fb06Vu3dNef vP+NG3xpuq1bDx26fh1IS7t9Wxz+XFmaP//dd9u3B6ysxKdOSge/PN0F/gshNSGBJx1N22FlXJzS wae/xo7t2bNFC6BFCwcHZQb4iI/5njwR3+5j4D8d+DRFSUlJCSHAsmVff63+N6UUtWjh6mplBYwb N2yYeCmqbPDpN5O5wmSQuDg+0W/qJr+QtDRhLfkOj8T71Loy1hf4dE6+iRPF2XCVpri4tLS8POCn n/73v6ws+fqT95+BL+9X5XQHD545k5kJXLwYHy9OgaYsvffe6NHe3oCTkzjkmLZ61lyvrZ410xkC fKjIXXRITr4zMT40NCw9veJloDPEgvvf8eNKA5/+njZNDPCxs5PO/qoMLVu2f39KCkAIfXjFwJcv R95ubcdRxVqxXhctWr8+Pl5uf/Ure3txTMmoqHHjKo8roBDw6ee/SSy3+Phxuq0CpQwcEe4dOwaQ 9RzGjtXIWE/gUx05cvVqVhZw9Oi1a+ohtHIHpC57Kg5I7enk7ZVPV1wsPq++dCklJS9PMx8Dv2bg S9NdvvzXX7m5QEjIBx/8/nvla299jkfN/Wtrf/l217zGr6zSUvGSRWngU/EXEC4M+6cD2KXWAVj5 khibkh9+eDiPW/pwWGEhN1CYi922tvUNPt1y/nxqamXApOVoqwht4Ffll/YDsiqg5f1n4Ouub816 1mXXxYvXrj14oE89V7a7JvWsy26l/uOXK1+I5cYXFQkX+Viy/tAhAKGA2ngAf86YMbrTf4qKuC+F V0mbmBilgK/rgGTga7ejoYKvfz0z8Ctt9yfxgtPevVm740NDwypewNaY8Jqsw3Y02baNgc/Al7Ob gS9fz5rrtdWzZrpaBZ/mH8bvJAO3bYNEGh1Acr7n9xmjjh3DNFKEiMREBj4DX3c9M/D1q2fNdHUC /jR4AQkJ9yL++jL+y4qbf1QaHQAQGhoaWlYGkGMIi47WVVEMfN3pGPi661nfdmHg68qv2z5ijdak xbJlALCY03y9SqYDEOXwtcvb5kHbtmEasUXejRsM/IpUDHzd7cLAl09Xp+B/IiwD0tOzIm3O5l7d vh1apLUDiLs88d3uz5eUkHukF8qWLmXgM/C12SFfnmY969suDHxd+fW0b4EwQAhYtEgkuaQEWqS1 A6BK+ai0m3/w5s1kHZkM+3PntBvAwJf3n4Gvb7sw8HXl188+MoOkEN+LF7Myku3/ctu6FVWoyg4A WMxxnCBwLQUn4djkyZgsLOBCysoY+Ax8Br58unr5xx9AppOSsjIyQlgphE+cCMhf80ulRwcgKqXD Yi4w8vJl8gNApq1Zw8Bn4GurZ33bhYGvK7++9v2zPhZOuLBqVXbL5Glv/vnf/0JP6d0BUDXJvzPB ctCsWWQdPsNv584x8Bn41W0XBr6u/Pra90+7zUAq2l286PKpqcD5z5uHaqraHUDc5Q0buz9fUsL/ JQzkC0aNAjCEW5SXx8Bn4DPw6/Af/11Mwme5ufwv+I1LCAuLD40PDQ2r/thJNR4+0+u7eV6npoaE kFvkHLdl716sIyvJEfH1DGouA1+7HQx8Br6+fhICYARZi29LS7m2GEo8hg69OyWp4I0vDh7EU8pg 4+e2Lpiz83SH8eP5TuS/ZN2GDQx8Bj4DX1d+fe37Z70rfLCDEK65cId7c/z4u0eT40JDN29GDVXt SwBtum63LCwgfuNG4RthCC4tWKC9Ihj4lf1n4D9tPeuyu8GA/4+4TDIH382fbyjwqQzWAVBd7728 R2DkkiXEiyQiafZseJIZOKmOOgOfgc/A1xd8LCILcSI6+m52Uq8w648/hoFV61NoqMiMYad2vv02 962QJbTYuBEfojvKTE0Z+Az86tazLrsbDPgDEIXSsjIEEBvOLCLiXkTSyNDQDRtQS6qzOXQ8+0SN ir06eLAQK/zG9d62jfMkQ8gBBwcGPgOfgY/yu/qcK1lAOoWH1/Tmnr6q80m02nhOyzkzwMNDsORK Sybt3IlHWArnHj0Y+Ax8ef8bOPiLyEKciIsjI8l98kdYWJZD8rQ3ztbdTAgGvwdQlVLT1jj1/jU9 3XSScOnRc337YiUZyh1cuRJjEIy+ZWUMfAa+LruNHvwRwhdkW2kpTPAxfl+xwsXFzIzr5+9f1+BT KWYaTRV5j5wgnTvDsmwjRqxdCzfyBxnfsycDn4Gv33601bNmunoBf5GwgByPi+NXcwTfTZqUmZg4 Kqzg4kXUsxTTAVRoIVlIeF5lkWXWd8SYMeQRWUdemD+f80QcOrVuzcBn4OtXz5rp6hJ88iexBdLS 0L3suBCwZElWRrJ9mNvXX4tlSvdRf6rzS4CqtZhbzAnCjcdrS/t9v3lz0+5l5+17+/gI1wRnZLz1 FtlOnsPnf//NwGfg65e/jsDPxlhsTk3FIgCYODHLzVZ4kOPrm5WRbP9G86++EstUDvhUCjwDqEri GUKrfbeeDfQbMIB7g3tIroWHYwJZi8uvvUZiyG7ctLFh4DPwawV8K5IF28JCeAm7yeR9++hgm+pj 7unzGq5SZIQdgLyaDo/YdYLY2lqeKg4UmgUHYxuJJl0GDEA48SKO/frBHJfwjpcXA5+Brxf4ZsJP 3IqUFLIYuwmOH+dzsI1M//VXHDUbURx48ODdo3/OGO2mxOlKq6cG0wFUJU/LcW6/5qhUJY5PVgtj u3Uj72IaSfH1RaqwH2t9fLgepAs3yscHv+A6edHFhXyDw3jF1hZ7yD7S3dYWHxIPxNvbM/CNBPz2 wofcsvx8rhXakyaFhXAghDwqLMRe7nusy87GdKEMkYmJdJpsLOWsSWZioukJ8pAUXbpE587T+wAz Uv0/gkMH2s6Pa5sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDUtMDRUMTU6MDE6MDUrMDA6MDDi hRxzAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA1LTA0VDE1OjAxOjA1KzAwOjAwk9ikzwAAACh0 RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wNS0wNFQxNTowMTowNSswMDowMMTNhRAAAAAASUVORK5C YII="
      />
    </svg>
  );
};
