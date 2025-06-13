'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

// React Hook Form
import { useForm } from 'react-hook-form';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';

// next intl
import { useTranslations } from 'next-intl';
import { Loader } from 'lucide-react';

type ContactCardProps = {
  deliveryMethod: 'email' | 'whatsapp';
};

export function ContactCard({ deliveryMethod }: ContactCardProps) {
  const router = useRouter();
  const t = useTranslations('ContactMe');
  const [isLoading, setIsLoading] = React.useState(false);

  let emailSchema: z.ZodString | z.ZodOptional<z.ZodString> = z
    .string({
      required_error: t('email.errorRequired'),
    })
    .email({
      message: t('email.errorInvalidEmail'),
    });

  if (deliveryMethod === 'whatsapp') {
    emailSchema = emailSchema.optional();
  }

  const FormSchema = z.object({
    name: z
      .string()
      .min(3, {
        message: t('name.errorMinCharacters'),
      })
      .max(40, {
        message: t('name.errorMaxCharacters'),
      }),
    email: emailSchema,
    category: z.enum(
      [
        t('category.options.1'),
        t('category.options.2'),
        t('category.options.3'),
      ],
      {
        required_error: t('category.errorRequired'),
      },
    ),
    message: z
      .string({
        required_error: t('message.errorRequired'),
      })
      .min(5, {
        message: t('message.errorMinCharacters'),
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    try {
      if (deliveryMethod === 'email') {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const error = await response.json();
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          throw new Error(error);
        }

        let message = data.message;

        if (message.length >= 50) {
          message = message.slice(0, 50) + '...';
        }

        toast({
          title: t('submitSuccess'),
          description: (
            <pre className="mt-2 w-fit rounded-md bg-slate-950 p-4">
              <code className="text-white overflow-hidden">
                {JSON.stringify(
                  {
                    name: data.name,
                    email: data.email,
                    category: data.category,
                    message: message,
                  },
                  null,
                  2,
                )}
              </code>
            </pre>
          ),
          duration: 50000,
        });
      }

      if (deliveryMethod === 'whatsapp') {
        const message = `
          Olá, me chamo ${data.name} e gostaria de falar com você.

          Gostaria de propor uma ${data.category}.

          ${data.message}
          `;

        router.push(
          `https://wa.me/5571999440042?text=${encodeURIComponent(message)}`,
        );
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'An error occurred while sending the email',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('card.title')}</CardTitle>
        <CardDescription>{t('card.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit(onSubmit)(e);
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-grow w-full">
                    <FormLabel>{t('name.label')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('name.placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex-grow w-full">
                    <FormLabel>{t('category.label')}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="min-w-[180px]">
                          <SelectValue
                            placeholder={t('category.placeholder')}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={t('category.options.1')}>
                          {t('category.options.1')}
                        </SelectItem>
                        <SelectItem value={t('category.options.2')}>
                          {t('category.options.2')}
                        </SelectItem>
                        <SelectItem value={t('category.options.3')}>
                          {t('category.options.3')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {t('category.description')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {deliveryMethod === 'email' && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow w-full sm:mt-5 lg:mt-0">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="icarocedraz7@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>{t('message.label')}</FormLabel>
                  <FormControl>
                    <Textarea
                      maxLength={590}
                      placeholder={t('message.placeholder')}
                      className="min-h-[140px] max-h-[220px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{t('message.description')}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-5" type="submit">
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  {t('submitLoading')}
                </>
              ) : (
                t('submit')
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
