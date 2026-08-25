'use client';

import { ArrowRightIcon, ClockIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/services';
import { formsubmitEndpoint, site } from '@/lib/site';

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const nextUrl = `${site.url}/thank-you`;

  return (
    <form
      action={formsubmitEndpoint}
      method="POST"
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value={`New project inquiry — ${site.name}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <Field label="First name" htmlFor="firstName">
        <Input id="firstName" name="firstName" required autoComplete="given-name" className="h-11" />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input id="lastName" name="lastName" required autoComplete="family-name" className="h-11" />
      </Field>
      <Field label="Company / Organization" htmlFor="company" className="sm:col-span-2">
        <Input id="company" name="company" autoComplete="organization" className="h-11" />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" autoComplete="tel" className="h-11" />
      </Field>
      <Field label="Service of interest" htmlFor="service" className="sm:col-span-2">
        <Select name="service" defaultValue={defaultService ?? ''}>
          <SelectTrigger id="service" className="h-11 w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent position="popper">
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.formValue}>
                {s.formValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project, property, timeline, or any specific requirements."
          className="min-h-24"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="h-12 w-full px-6 text-base font-semibold">
          Submit project inquiry
          <ArrowRightIcon className="size-4" />
        </Button>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <ClockIcon className="size-3.5 shrink-0" />
          We respond within one business day — usually the same afternoon.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${className ?? ''}`}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
