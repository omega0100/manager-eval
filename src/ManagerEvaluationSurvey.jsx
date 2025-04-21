import { useState } from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Textarea } from "./components/ui/Textarea";
import { Label } from "./components/ui/Label";

/**
 * Manager Evaluation Survey – bilingual (EN/AR)
 * -------------------------------------------------
 * • Glass‑like card with gradient header
 * • Custom radio pills (1‑5) that change colour on select
 * • Vanilla <input type="radio"> ensures selection works everywhere
 */
export default function ManagerEvaluationSurvey() {
  const [lang, setLang] = useState("en");
  const t = {
    en: {
      head: "Manager Evaluation Survey",
      ratings: "Rate each aspect (1 = Poor, 5 = Excellent)",
      q1: "Leadership style",
      q2: "Communication & feedback",
      q3: "Support for your development",
      q4: "Overall performance",
      open: "Open‑ended feedback",
      s1: "What does the manager do well?",
      s2: "Where can the manager improve?",
      s3: "Advice for the manager’s development",
      submit: "Submit",
      switch: "العربية"
    },
    ar: {
      head: "استبيان تقييم المدير",
      ratings: "قيّم كل جانب (1 = ضعيف، 5 = ممتاز)",
      q1: "أسلوب القيادة",
      q2: "التواصل والتغذية الراجعة",
      q3: "دعم تطوّرك المهني",
      q4: "الأداء العام",
      open: "أسئلة مفتوحة",
      s1: "ما الذي يُجيده المدير؟",
      s2: "أين يمكن للمدير أن يتحسّن؟",
      s3: "نصائح لتطوير المدير",
      submit: "إرسال",
      switch: "English"
    }
  };
  const dir = lang === "ar" ? "rtl" : "ltr";

  // local state
  const [ratings, setRatings] = useState({ q1: "3", q2: "3", q3: "3", q4: "3" });
  const [text, setText] = useState({ s1: "", s2: "", s3: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ lang, ratings, text });
    alert(lang === "ar" ? "شكراً لمشاركتك!" : "Thank you for your feedback!");
  };

  const RadioRow = ({ id, label }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
      <Label className="sm:w-56 font-medium">{label}</Label>
      <div className="flex gap-3" dir="ltr">
        {["1", "2", "3", "4", "5"].map((v) => {
          const radioId = `${id}-${v}`;
          return (
            <span key={v} className="relative">
              <input
                type="radio"
                id={radioId}
                name={id}
                value={v}
                checked={ratings[id] === v}
                onChange={(e) => setRatings({ ...ratings, [id]: e.target.value })}
                className="peer absolute opacity-0 w-0 h-0"
              />
              <label
                htmlFor={radioId}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-sky-500 text-sky-700 dark:text-sky-100 peer-checked:bg-sky-600 peer-checked:text-white peer-checked:border-sky-700 transition cursor-pointer select-none"
              >
                {v}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 px-2"
      dir={dir}
    >
      <Card className="backdrop-blur bg-white/70 dark:bg-slate-800/70 shadow-xl rounded-2xl max-w-3xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-600 text-white rounded-t-2xl p-6">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl sm:text-2xl font-bold drop-shadow-md">
              {t[lang].head}
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/40"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
            >
              {t[lang].switch}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 p-6">
          <form onSubmit={handleSubmit} className="space-y-10">
            <section className="space-y-6">
              <h3 className="font-semibold text-lg text-sky-700 dark:text-sky-300">
                {t[lang].ratings}
              </h3>
              <RadioRow id="q1" label={t[lang].q1} />
              <RadioRow id="q2" label={t[lang].q2} />
              <RadioRow id="q3" label={t[lang].q3} />
              <RadioRow id="q4" label={t[lang].q4} />
            </section>

            <section className="space-y-6">
              <h3 className="font-semibold text-lg text-sky-700 dark:text-sky-300">
                {t[lang].open}
              </h3>
              {["s1", "s2", "s3"].map((k) => (
                <div key={k} className="space-y-2">
                  <Label className="font-medium">{t[lang][k]}</Label>
                  <Textarea
                    value={text[k]}
                    onChange={(e) => setText({ ...text, [k]: e.target.value })}
                    rows={3}
                    className="resize-none rounded-2xl shadow-sm focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              ))}
            </section>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="px-10 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
                >
                  {t[lang].submit}
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
